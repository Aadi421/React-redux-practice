import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { setProducts } from '../../Redux/actions/productActions';
import ProductComponent from '../ProductComponent/ProductComponent'

const ProductList=(props)=>{ 
    const products=useSelector((state)=>state.allProducts.products)
    const dispatch=useDispatch();
    const fetchProducts=async ()=>{
        const responce= await axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log('error',err)
            })
            console.log(responce);
        dispatch(setProducts(responce.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    console.log(products)
    return(
        <div className='ui grid container'>
            {Object.keys(products).length === 0 ? (
                <div>...Loading</div>
            ) : (
            <ProductComponent/>  
            ) }     
        </div>
    )
}

export default ProductList;