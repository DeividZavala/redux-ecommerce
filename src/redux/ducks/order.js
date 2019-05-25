import axios from "axios";
import crypto from "crypto";

//constants
let PAYMENT = "PAYMENT";

// reducer
export default function orders(state = {}, action) {
  switch (action.type) {
    case PAYMENT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

// actions
let doPaymentSuccess = payload => ({ type: PAYMENT, payload });

// thunks
export let doPayment = card => (dispatch, getState) => {
  let { cart } = getState();
  const secret = "perro";
  card = crypto
    .createHmac("sha256", secret)
    .update(card)
    .digest("hex");
  let order = { cart, card, paid: true };
  console.log(order);
  return axios.post("http://localhost:3004/orders", order).then(res => {
    const { data: order } = res;
    dispatch(doPaymentSuccess(order));
    return order;
  });

  // dispatch(doPaymentSuccess(order));
};
