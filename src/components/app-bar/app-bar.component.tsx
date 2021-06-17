import React, { Fragment } from 'react';
import './app-bar.component.css'
import fk from './../../images/fk.png';
import { LocalGroceryStore } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { Product } from './../../Models';

export function AppBarComponent() {

    const cart:Array<Product> =  useSelector<any, Array<Product>>(state => state.cart);
    return <Fragment>
            <div className="appbar">
                <div className="appbar-items">
                    <div><img src={fk} width="80" height="30" alt="logo"/></div>
                    <div><IconButton aria-label="view Cart">
                        <Badge badgeContent={cart.length} color="secondary">
                            <LocalGroceryStore htmlColor="#ffffff" />
                        </Badge>
                    </IconButton></div>
                </div>

            </div>
        </Fragment>


}
