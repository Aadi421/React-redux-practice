import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)

    const renderList = products.map((product) => {
        const { id, image, title, category, price } = product
        return (
            
                <div className='four column wide' key={id}>
                    <Link to={`/product/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'><img src={image} alt="product_image" /></div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>{price}</div>
                                <div className='meta '>{category}</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            
        )
    })
    return (
        <div className='ui three column grid'>
            {renderList}
        </div>
    )
}

export default ProductComponent;