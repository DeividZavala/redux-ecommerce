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
            let {total,quantity,items} = action.payload
            return {...state, total,quantity,items}
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
     // si es el mismo producto solo sumamos las cantidades
    let cart = getState().cart
    let p = cart.items.find(p=>p.id === product.id)
    let items = []
    if(p){
        product.quantity = p.quantity ? ++p.quantity : 2
        items = cart.items.map(p=>{
            if(p.id===product.id) return product
            return p
        })
    }else{
        product.quantity = 1
        items = [...cart.items, product]
    }
    let total = items.reduce((acc,p)=>acc+(p.price *p.quantity) ,0)
    let quantity = items.reduce((acc,p)=>acc+p.quantity,0)
    dispatch(addToCartSuccess({items,total,quantity})) 
}

