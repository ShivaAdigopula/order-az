import React, { useCallback, useState } from 'react';
import './product.component.css'
import { Product } from './../../Models';
import {Button, Card} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { addToCart } from './../../redux-store/actions';

export const ProductComponent: React.FunctionComponent<{ product: Product }> = ({ product }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const dispatch = useDispatch();
    const addToCartHandler = useCallback(() =>{
        if (!addedToCart) {
            dispatch(addToCart(product));
        }
        setAddedToCart(!addedToCart);
    }, [product, addedToCart])
    return (<Card className="product-container" key={product.title}>
        <div className="product-image">
            <img src={product.image} width="150" height="200" alt="product" />
        </div>
        <div className="product-info-control">
            <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{`$${product.price}`}</div>
            </div>
            <div className="product-controls">
                <Button variant="outlined" color="primary" onClick={addToCartHandler}>
                    {addedToCart ? 'Added To Cart' : 'Add To Cart'}
                </Button>
            </div>
        </div>
    </Card>)
}