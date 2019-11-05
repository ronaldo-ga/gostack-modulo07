import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
    const productExist = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    if (productExist) {
        const amount = productExist.amount + 1;

        yield put(updateAmount(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormated: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);