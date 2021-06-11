import { Product } from '../Models';
import { SET_PRODUCTS } from './action-constants';


export function setProducts(data:Array<Product>) {
    return {
        type: SET_PRODUCTS,
        payload: data,
    }
}

export interface Action {
    type: String,
    payload: any,
}