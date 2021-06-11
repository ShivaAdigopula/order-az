import { useEffect, useState } from 'react';
import './App.css';
import AppBar from './app-bar';
import { ProductComponent } from './product/product.component';
import { Product } from './Models';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
   axios.get('https://fakestoreapi.com/products')
   .then(successResponse => {
      if (successResponse && successResponse.data){
        setProducts(successResponse.data)
      }
   }).catch(errorResponse => {
      console.log('unable to load products')
   })
  }, [])

  

  return (
    <div className="App">
      <AppBar />
    <div className="search-results">
      {products.map(product => <ProductComponent product={product}/>)}
    </div>
      
    </div>
  );
}

export default App;
