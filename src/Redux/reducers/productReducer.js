
const intialState = {
    products: [],
    cartItems: [],
    cartItemsQuantity: 0,
    cartItemsTotalPrice: 0,
};

export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: payload
            }
        case 'ADD_TO_CART':
            if (state.cartItemsQuantity == 0) {
                let cart = {
                    id: payload.id,
                    quantity: 1,
                    title: payload.title,
                    image: payload.image,
                    price: payload.price,
                    category: payload.category,
                }
                state.cartItems.push(cart);
            }
            else {
                let check = false;
                state.cartItems.map((element, key) => {
                    if (element.id == payload.id) {
                        state.cartItems[key].quantity++;
                        check = true;
                    }
                })

                if (!check) {
                    let newCart = {
                        id: payload.id,
                        quantity: 1,
                        title: payload.title,
                        image: payload.image,
                        price: payload.price,
                        category: payload.category,
                    }
                    state.cartItems.push(newCart);
                }
            }
            return {
                ...state,
                cartItemsQuantity: state.cartItemsQuantity + 1,
                cartItemsTotalPrice: state.cartItemsTotalPrice + payload.price,

            }
        case 'INCREASE_ITEM':
            state.cartItems.map((element, key) => {
                if (element.id == payload.id) {
                    state.cartItems[key].quantity++;
                }
            })
            return {
                ...state,
                cartItemsQuantity: state.cartItemsQuantity + 1,
                cartItemsTotalPrice: state.cartItemsTotalPrice + payload.price,
            }
        case 'DECREASE_ITEM':
            return {

            }
        case 'DELETE_ITEM':
            return {

            }
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'DETAIL_PRODUCT':
            return { ...state, ...payload }
        default:
            return state;
    }
}



