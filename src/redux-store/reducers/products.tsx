import { SET_PRODUCTS } from '../action-constants';
import { Product } from '../../Models';
import { Action } from './../actions';


const productsReducer = (state:Array<Product> = [], action:Action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return action.payload;
      default:
        return state;
    }
  }
  
  export default productsReducer;