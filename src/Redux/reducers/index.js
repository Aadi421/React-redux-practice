import {combineReducers} from 'redux'
import { productReducer,selectedProductReducer } from './productReducer'

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    // cartItemsDetail:addToCartReducer,
})

export default reducers;