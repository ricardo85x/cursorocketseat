import { call, put, all, takeLatest } from 'redux-saga/effects';
/*
    - call é igual o api.get que retorna uma prommise depois do yield
    - ut envia uma action para o reducer
    - all cadastra varios listeners
    - takeLatest usado junto com o all [] se o usuario clicar varias vezes, e a primeira requisição ainda nao finalizou, ele pega a ultima e ignora as primeiras
*/
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
    /*
        - * indica algo parecido ao async function()
        - como estamos usando o *, nao podemos chamar o await, logo usamos o yield call
    */

    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
