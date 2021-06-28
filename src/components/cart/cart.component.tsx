import React, { Fragment } from 'react';
import { CartProductComponent } from './../cart-product/cart-product.component';
import { Product } from './../../Models';

export const CartComponent: React.FunctionComponent<{ cart: Array<Product> }> = ({ cart }) => {
    function getTotalCost(cart: Array<Product>) {
        return cart.reduce((total, product) => total += product.price* (product.quantity||1), 0);
    }
    return <Fragment>
        {
            cart.map(product => <CartProductComponent product={product} />)
        }
        <div>
            <span>Total</span> <span>{`  $${getTotalCost(cart)}`}</span>
        </div>
    </Fragment>
}