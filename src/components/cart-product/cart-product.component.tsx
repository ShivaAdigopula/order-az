import React, { Fragment } from 'react';
import { Product } from './../../Models';
import './cart-product.component.css';

export const CartProductComponent: React.FunctionComponent<{ product: Product }> = ({ product }) => {
    return <Fragment>
        <div className="cart-product-container" key={product.title}>
            <div className="cart-product-item">
            <div className="cart-product-info">
                <div className="cart-product-title">{product.title}</div>
                <div className="cart-product-price">{`${product.quantity || 1} X $${product.price}`}</div>
            </div>
            </div>
            <div className="cart-product-item">
                <img src={product.image} width="50" height="70" alt="product" />
            </div>
        </div>

    </Fragment>
}