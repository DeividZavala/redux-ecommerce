import {combineReducers} from 'redux'

const ADD_TO_CART = "ADD_TO_CART"
const UPDATE_ITEMS = "UPDATE_ITEMS"
const REMOVE_ITEM = "REMOVE_ITEM"
const EMPTY_CART = "EMPTY_CART"

let initialState = {
    items:[],
    quantity: 0,
    total: 0
}
if(localStorage.cart){
    try{
        initialState = JSON.parse(localStorage.cart)
    }catch(e){}
}

export default function reducer(state=initialState, action){
    
    switch(action.type){
        case ADD_TO_CART:
            let {items, total, quantity} = action.payload
            return {...state, total,quantity,items}
        case UPDATE_ITEMS:
            return {
                ...state, 
                items:action.payload.items, 
                total:action.payload.total, 
                quantity:action.payload.quantity
            }
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

let updateItemsSuccess = (payload) => ({
    type: UPDATE_ITEMS,
    payload 
})

export let changeQuantity = (operation, index) => (dispatch, getState) => {
    let items = getState().cart.items
    if(operation === "+"){
        items[index].quantity++
    }else if(operation === "-"){
        items[index].quantity--
        if(items[index].quantity<1) items.splice(index,1)
    }
    let {total, quantity} = getTotals(items)
    dispatch(updateItemsSuccess({items, total, quantity}))
}

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
    let {total, quantity} = getTotals(items)
    dispatch(addToCartSuccess({items,total,quantity})) 
    // lo guarda
    saveToLocal({items,total,quantity})
}

// utils alv
function getTotals(items){
    let total = items.reduce((acc,p)=>acc+(p.price *p.quantity) ,0)
    let quantity = items.reduce((acc,p)=>acc+p.quantity,0)
    return {total, quantity}
}

function saveToLocal(cart){
    localStorage.cart = JSON.stringify(cart)
}