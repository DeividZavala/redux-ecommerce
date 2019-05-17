const CREATE = 'ecommerce/products/CREATE';
const EDIT = 'ecommerce/products/EDIT';
const SET = 'ecommerce/products/SET'


const initialState = {
    total: 0,
    product: {},
    items: {}
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case SET:
            const {payload: product} = action;
            return {...state, product};

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

export const editProduct = (payload) => ({
    type: EDIT,
    payload
})


export const onCreateProduct = (product) => (dispatch) => {
    const id  = Math.floor(Math.random() * 200) + 1
    dispatch(createProduct({...product, id})) 
}

export const onSetProduct = (product) => (dispatch) => {
    dispatch(setProduct(product)) 
}