import React from 'react';
import './product.component.css'
import { Product } from './../../Models';

export const ProductComponent : React.FunctionComponent<{product:Product}> = ({product}) => {
       return (<div className="product-container">
        <div className="product-image">
           <img src={product.image} width="150" height="200" alt="product"/>
        </div>
        <div className="product-info">
            <div className="product-title">{product.title}</div>
            <div className="product-price">{`$${product.price}`}</div>
        </div>
        <div className="product-controls"></div>
    </div>)
}