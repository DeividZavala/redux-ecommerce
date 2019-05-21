import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProductContiner from './components/NewProduct/NewProductContainer';
import ListProductsContainer from './components/ListProducts/ListProductsContainer';
import EditProductContainer from './components/EditProduct/EditProductContainer';

export default () => (
    <Switch>
        <Route exact path="/new-product" component={NewProductContiner} />
        <Route path="/all-products" component={ListProductsContainer}/>
        <Route path="/edit/:id" component={EditProductContainer}/>
    </Switch>
)