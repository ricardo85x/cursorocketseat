import { call, select, put, all, takeLatest } from 'redux-saga/effects';
/*
    - call é igual o api.get que retorna uma prommise depois do yield
    - ut envia uma action para o reducer
    - all cadastra varios listeners
    - takeLatest usado junto com o all [] se o usuario clicar varias vezes, e a primeira requisição ainda nao finalizou, ele pega a ultima e ignora as primeiras
    - select busca informacao dentro do stato
*/

import { toast } from 'react-toastify';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
    /*
        - * indica algo parecido ao async function()
        - como estamos usando o *, nao podemos chamar o await, logo usamos o yield call
    */

    const stock = yield call(api.get, `/stock/${id}`);

    const {
        data: { amount: stockAmount },
    } = stock;

    const productExistts = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const currentAmount = productExistts ? productExistts.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        console.tron.warn('Erro nao temos produtos no estoque');
        toast.error('Não temos o produto no estoque');
        return;
    }

    if (productExistts) {
        yield put(updateAmount(id, 'ADD'));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
