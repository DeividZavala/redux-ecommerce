import { combineReducers } from 'redux';
import products from './ducks/products';
import cart from './ducks/cart'
import {reducer as form} from 'redux-form';

export default combineReducers({
    products,
    cart,
    form
})