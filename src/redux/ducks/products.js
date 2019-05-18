import axios from 'axios';
import UIkit from 'uikit';
import {normalizedData} from '../../utils/formatingMethods';

const CREATE = 'ecommerce/products/CREATE';
const SET = 'ecommerce/products/SET';
const FETCH_SUCCESS = 'ecommerce/products/FETCH_SUCCESS';


const initialState = {
    total: 0,
    product: {},
    items: {}
}

export default function reducer(state = initialState, action){
    switch (action.type){

        case SET:
            const {payload: product} = action;
            return {...state, product};

        case FETCH_SUCCESS:
            const products = normalizedData(action.payload);
            return {...state, items: products}

        case CREATE:
            let {items} = state;
            items = {...items, [action.payload.id]: action.payload}
            return {...state, items}

        default:
            return state;
    }
}


export const createProduct = (payload) => ({
    type: CREATE,
    payload
})

export const setProduct = (payload) => ({
    type: SET,
    payload
})

export const fetchSuccessProducts = (payload) => ({
    type: FETCH_SUCCESS,
    payload
})

export const onCreateProduct = (product) => (dispatch) => {
    axios.post("http://localhost:3001/products", product)
    .then(res => {
        const {data: product} = res;
        UIkit.notification({
            message: '<span uk-icon=\'icon: check\'></span> Producto creado', 
            status: "success", 
            pos: 'top-right'
        })
        dispatch(createProduct(product)) 
    })
    
}

export const onSetProduct = product => dispatch => {
    dispatch(setProduct(product));
}


export const onFetch = () => (dispatch) => {
    axios.get("http://localhost:3001/products")
    .then(res => {
        const {data: products} = res;
        dispatch(fetchSuccessProducts(products))
    })
}