import { Product } from '../Models';
import { HIDE_LOADING_INDICATOR, LOAD_PRODUCTS, SET_PRODUCTS, SHOW_LOADING_INDICATOR } from './action-constants';


export function loadProducts(payload:Object) {
    return {
        type: LOAD_PRODUCTS,
        payload,
    }
}

export function setProducts(data:Array<Product>) {
    return {
        type: SET_PRODUCTS,
        payload: data,
    }
}

export function showLoadingIndicator() {
    return {
        type: SHOW_LOADING_INDICATOR
    }
}

export function hideLoadingIndicator() {
    return {
        type: HIDE_LOADING_INDICATOR
    }
}



export interface Action {
    type: String,
    payload: any,
}