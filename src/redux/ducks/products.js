import axios from "axios";
import UIkit from "uikit";
import { normalizedData } from "../../utils/formatingMethods";

const CREATE = "ecommerce/products/CREATE";
const EDIT = "ecommerce/products/EDIT";
const SET = "ecommerce/products/SET";
const FETCH_SUCCESS = "ecommerce/products/FETCH_SUCCESS";

const initialState = {
  total: 0,
  product: {},
  items: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      const { payload: product } = action;
      return { ...state, product };

    case FETCH_SUCCESS:
      const products = normalizedData(action.payload);
      return { ...state, items: products };

    case CREATE:
      let { items } = state;
      items = { ...items, [action.payload.id]: action.payload };
      return { ...state, items };

    case EDIT:
      let { items: newItems } = state;
      newItems = { ...newItems, [action.payload.id]: action.payload };
      return { ...state, items: newItems };

    default:
      return state;
  }
}

export const createProduct = payload => ({
  type: CREATE,
  payload
});

export const editProduct = payload => ({
  type: EDIT,
  payload
});

export const setProduct = payload => ({
  type: SET,
  payload
});

export const fetchSuccessProducts = payload => ({
  type: FETCH_SUCCESS,
  payload
});

export const onCreateProduct = product => dispatch => {
  axios.post("http://localhost:3004/products", product).then(res => {
    const { data: product } = res;
    UIkit.notification({
      message: "<span uk-icon='icon: check'></span> Producto creado",
      status: "success",
      pos: "top-right"
    });
    dispatch(createProduct(product));
  });
};

export const onEditProduct = product => dispatch => {
  axios
    .patch(`http://localhost:3004/products/${product.id}`, product)
    .then(res => {
      const { data: product } = res;
      UIkit.notification({
        message: "<span uk-icon='icon: check'></span> Producto editado",
        status: "success",
        pos: "top-right"
      });
      dispatch(editProduct(product));
    });
};

export const onSetProduct = product => dispatch => {
  dispatch(setProduct(product));
};

export const onFetch = () => dispatch => {
  axios.get("http://localhost:3004/products").then(res => {
    const { data: products } = res;
    dispatch(fetchSuccessProducts(products));
  });
};
