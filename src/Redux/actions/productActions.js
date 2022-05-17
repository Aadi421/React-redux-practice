

export const setProducts=(products)=>{
    return (
        {
            type:'SET_PRODUCTS',
            payload:products,
        }
    )
}
export const detailProducts=(product)=>{
    return (
        {
            type:'DETAIL_PRODUCT',
            payload:product,
        }
    )
}

export const addToCart=(product)=>{
    return (
        {
            type:'ADD_TO_CART',
            payload:product,
        }
    )
}
export const increaseItem=(product)=>{
    return (
        {
            type:'INCREASE_ITEM',
            payload:product,
        }
    )
}
export const decreaseItem=(product)=>{
    return (
        {
            type:'DECREASE_ITEM',
            payload:product,
        }
    )
}
export const deleteItem=(product)=>{
    return (
        {
            type:'DELETE_ITEM',
            payload:product,
        }
    )
}