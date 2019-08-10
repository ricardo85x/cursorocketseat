import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import api from "~/services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, "/sessions", {
      email,
      password
    });
    const { user, token } = response.data;

    if (!user.provider) {
      console.tron.error("usuario não é prestador de serviço");
      return;
    }

    yield put(signInSuccess(token, user));

    console.tron.log("papacapim");

    history.push("/dashboard");
  } catch (e) {
    yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
