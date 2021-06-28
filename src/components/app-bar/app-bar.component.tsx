import React, { Fragment, useState } from 'react';
import './app-bar.component.css'
import fk from './../../images/fk.png';
import { LocalGroceryStore } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Badge, Popover } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { Product } from './../../Models';
import { CartComponent } from './../cart/cart.component';

export function AppBarComponent() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const cart: Array<Product> = useSelector<any, Array<Product>>(state => state.cart);
    return <Fragment>
        <div className="appbar">
            <div className="appbar-items">
                <div><img src={fk} width="80" height="30" alt="logo" /></div>
                <div>
                    <IconButton aria-label="view Cart" onClick={handleClick}>
                        <Badge badgeContent={cart.length} color="secondary">
                            <LocalGroceryStore htmlColor="#ffffff" />
                        </Badge>
                    </IconButton>
                    <Popover
                        id="cart"
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                       <CartComponent cart={cart}></CartComponent>
                    </Popover>
                </div>
            </div>

        </div>
    </Fragment>


}
