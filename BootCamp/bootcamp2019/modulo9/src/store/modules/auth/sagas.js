import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import api from "~/services/api";

import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, "/sessions", {
    email,
    password
  });

  console.tron.log(response);

  const { user, token } = response.data;

  if (!user.provider) {
    console.tron.error("usuario não é prestador de serviço");
    return;
  }

  console.tron.log("tudo numa boa");

  yield put(signInSuccess(token, user));

  console.tron.log("papacapim");

  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
