import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts, addToCart } from '../../Redux/actions/productActions';
import createNotification from '../Notification/Noty';

const ProductDetail = () => {
    const { productID } = useParams();
    console.log(productID)

    const dispatch = useDispatch()

    const product = useSelector((state) => state.product)
    console.log('selector', product)
    const { id, title, description, category, image, price } = product

    const fetchSingleProduct = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productID}`)
            .catch((err) => console.log('Error', err))

        dispatch(detailProducts(response.data))
        console.log(response.data)

    }
    const handleClick = () => {
        if (product) {
            dispatch(addToCart(product));
            createNotification('success')
        }
    }
    useEffect(() => {
        if (productID && productID !== "") fetchSingleProduct();
    }, [productID])

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" onClick={handleClick} tabIndex="0">
                                    <div className="hidden content">Add To Cart</div>
                                    <div className="visible content">
                                        <i className="shop icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default ProductDetail;