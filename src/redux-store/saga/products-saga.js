import { call, put, takeLatest } from 'redux-saga/effects';
import { _loadProducts } from '../../services/Product-Service';
import { LOAD_PRODUCTS, SET_PRODUCTS } from '../action-constants';
import { hideLoadingIndicator, showLoadingIndicator } from '../actions';

function* loadProducts(action) {
        const {payload} = action;
        const {dispatch} = payload;
        dispatch(showLoadingIndicator())
        const response = yield call(_loadProducts);
        if (response.error) {
            yield put({ type: SET_PRODUCTS, payload: [] });
            
        }else {
            yield put({ type: SET_PRODUCTS, payload:response });
        }
        dispatch(hideLoadingIndicator())

}

export function* loadProductsSaga() {
    yield takeLatest(LOAD_PRODUCTS, loadProducts);
}