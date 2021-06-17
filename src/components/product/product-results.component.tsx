import React, { useEffect } from 'react';
import './product.component.css'
import { Product } from './../../Models';
import { ProductComponent } from './product.component';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux-store/actions';

export const ProductResultsComponent: React.FunctionComponent = () => {
    const products: Array<Product> = useSelector<any, Array<Product>>(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts({ dispatch }));
    }, [dispatch])


    return (
        <div className="search-results">
            {products.map(product => <ProductComponent product={product} />)}
        </div>
    )

}