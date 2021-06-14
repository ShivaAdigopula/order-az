 import { createStore, applyMiddleware, compose } from 'redux';
 import { routerMiddleware } from 'connected-react-router';
 import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import { loadProductsSaga } from './saga/products-saga';


 
 export function configureStore(initialState = {}, history) {
   let composeEnhancers = compose;
   const reduxSagaMonitorOptions = {};
   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
   }
 
 
   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
 
   // Create the store with two middlewares
   // 1. sagaMiddleware: Makes redux-sagas work
   // 2. routerMiddleware: Syncs the location/URL path to the state
   const middlewares = [sagaMiddleware, routerMiddleware(history)];
 
   const enhancers = [applyMiddleware(...middlewares)];
 
   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );

 
   /* add all sagas to middleWare here */
   /* sagaMiddleware.run(loginSaga); */
   sagaMiddleware.run(loadProductsSaga);
 
 
 
   store.runSaga = sagaMiddleware.run;
   store.injectedReducers = {};
   // Reducer registry
   store.injectedSagas = {}; // Saga registry
 
 
 
   return store;
 }
 