import React from "react";
import { Switch, Route } from "react-router-dom";
import NewProductContiner from "./components/NewProduct/NewProductContainer";
import ListProductsContainer from "./components/ListProducts/ListProductsContainer";
import EditProductContainer from "./components/EditProduct/EditProductContainer";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";

export default () => (
  <Switch>
    <Route exact path="/new-product" component={NewProductContiner} />
    <Route path="/all-products" component={ListProductsContainer} />
    <Route path="/edit/:id" component={EditProductContainer} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/confirmation" component={Confirmation} />
  </Switch>
);
