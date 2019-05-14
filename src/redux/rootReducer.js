import { combineReducers } from 'redux';
import products from './ducks/products';
import {reducer as form} from 'redux-form';

export default combineReducers({
    products,
    form
})