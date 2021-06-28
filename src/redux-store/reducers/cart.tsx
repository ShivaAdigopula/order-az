import { Product } from '../../Models';
import { Action } from './../actions';
import { ADD_TO_CART } from './../action-constants';


export const cartReducer = (state:Array<Product> = [], action:Action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const {payload} = action;
        return [...new Set<Product>([...state, payload])];
      default:
        return state;
    }
  }
