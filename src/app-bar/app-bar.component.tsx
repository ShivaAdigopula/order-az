import React, { Fragment } from 'react';
import './app-bar.component.css'
import fk from './../images/fk.png';
import { LocalGroceryStore } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Badge } from '@material-ui/core'

export class AppBarComponent extends React.Component {


    render() {
        return <Fragment>
            <div className="appbar">
                <div className="appbar-items">
                    <div><img src={fk} width="80" height="30" /></div>
                    <div><IconButton aria-label="view Cart">
                        <Badge badgeContent={4} color="secondary">
                            <LocalGroceryStore htmlColor="#ffffff" />
                        </Badge>
                    </IconButton></div>
                </div>

            </div>
        </Fragment>
    }


}
