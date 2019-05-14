import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProductContiner from './components/NewProduct/NewProductContainer';

export default () => (
    <Switch>
        <Route exact path="/new-product" component={NewProductContiner} />
    </Switch>
)