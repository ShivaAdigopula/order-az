import { useEffect } from 'react';
import './App.css';
import AppBar from './app-bar';
import { ProductComponent } from './components/product/product.component';
import { Product } from './Models';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingIndicator, setProducts, showLoadingIndicator } from './redux-store/actions';
import { LoadingIndicator } from './components/LoadingIndicator/LoadingIndicator.component';

function App() {
  const products:Array<Product> = useSelector<any, Array<Product>>(state => state.products);
  const loading:Boolean = useSelector<any, Boolean>(state => state.global.loadingIndicator);
  const dispatch = useDispatch();


  useEffect(()=>{
  dispatch(showLoadingIndicator());
   axios.get('https://fakestoreapi.com/products')
   .then(successResponse => {
      if (successResponse && successResponse.data){
        // setProducts(successResponse.data)
        dispatch(setProducts(successResponse.data));
        dispatch(hideLoadingIndicator());
      }
   }).catch(errorResponse => {
      console.log('unable to load products', errorResponse);
      dispatch(hideLoadingIndicator());
   })
  }, [dispatch])

  

  return (
    <div className="App">
      {loading && <LoadingIndicator />}
      <AppBar />
    <div className="search-results">
      {products.map(product => <ProductComponent product={product}/>)}
    </div>
      
    </div>
  );
}

export default App;
