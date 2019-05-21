import {combineReducers} from 'redux'

const ADD_TO_CART = "ADD_TO_CART"
const UPDATE_ITEM = "UPDATE_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"
const EMPTY_CART = "EMPTY_CART"

let initialState = {
    items:[],
    quantity: 0,
    total: 0
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            let {total,quantity,product} = action.payload
            return {...state, total,quantity,items:[product, ...state.items]}
        case UPDATE_ITEM:
        case REMOVE_ITEM:
        case EMPTY_CART:
        default:
            return state
    }
}

let addToCartSuccess = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export let addToCart = (product) => (dispatch, getState) => {
    let cart = getState().cart
    let total = cart.total + product.price
    let quantity = cart.quantity + 1
    dispatch(addToCartSuccess({product,total,quantity})) 
}

