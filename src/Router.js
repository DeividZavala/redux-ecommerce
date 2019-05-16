import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProductContiner from './components/NewProduct/NewProductContainer';
import ListProductsContainer from './components/ListProducts/ListProductsContainer';

export default () => (
    <Switch>
        <Route exact path="/new-product" component={NewProductContiner} />
        <Route path="/all-products" component={ListProductsContainer}/>
    </Switch>
)