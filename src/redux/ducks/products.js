const CREATE = 'ecommerce/products/CREATE';


const initialState = {
    total: 0,
    items: {}
}

export default function reducer(state = initialState, action){
    switch (action.type){
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


export const onCreateProduct = (product) => (dispatch) => {
    const id  = Math.floor(Math.random() * 200) + 1
    dispatch(createProduct({...product, id})) 
}