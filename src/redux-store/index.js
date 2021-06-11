import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products";
const middleWare = applyMiddleware(thunk);
export default createStore(productsReducer, middleWare);