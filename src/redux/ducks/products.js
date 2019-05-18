import axios from 'axios';
import UIkit from 'uikit';

const CREATE = 'ecommerce/products/CREATE';
const FETCH_SUCCESS = 'ecommerce/products/FETCH_SUCCESS';


const initialState = {
    total: 0,
    items: {}
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case FETCH_SUCCESS:
            return state
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


export const onFetch = () => (dispatch) => {
    axios.get("http://localhost:3001/products")
    .then(res => {
        console.log(res.data);
    })
}