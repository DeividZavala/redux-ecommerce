//constants
let PAYMENT = "PAYMENT"

// reducer
export default function orders(state={}, action){
    switch(action.type){
        case PAYMENT:
            return {...state, [action.payload.id]:action.payload}
        default:
            return state
    }
}

// actions
let doPaymentSuccess = (payload) => ({type: PAYMENT, payload})

// thunks
export let doPayment = (card) => (dispatch, getState) => {
    let {cart} = getState()
    let order = {cart,card, paid: true }
    order.id = Date.now()
    dispatch(doPaymentSuccess(order))
}