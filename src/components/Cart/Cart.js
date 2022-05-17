import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseItem } from '../../Redux/actions/productActions';

const Cart = () => {
    const { cartItems, cartItemsTotalPrice, cartItemsQuantity } = useSelector((state) => state.allProducts)
    console.log(cartItems);

    const dispatch=useDispatch();
    const incrementHandler=(data)=>{
        console.log(data)
        dispatch(increaseItem(data));
    }

    const renderCart = cartItems.map((Item) => {
        const { id, price, title, image, category, quantity } = Item;
        return (
            <div className="item " key={id}>
                <div className="ui small image">
                    <Link to='/product/:id'><img src={image} alt="cartItems" /></Link>
                </div>
                <div className="middle aligned content">
                    <span className="header">{title}</span>
                    <div className="meta">
                        <span>{category}</span>
                    </div>
                    <div className="description">
                        <p>Rs - {price}</p>
                        <p>Qty - {quantity}</p>
                    </div>
                    <div className="meta">
                        <button class="ui primary button"><i class="plus icon"></i></button>
                        {quantity>1?
                            (
                                <button class="ui success button"><i class="minus icon"></i></button>
                            )
                            :
                            (
                                <button class="ui secondary button"><i class="trash alternate icon"></i></button>
                            )}                    
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div style={Styles.paddingMargin}>
            <div className="ui divided  items" >
                {renderCart}
            </div>
            <br />
            <div class="ui divider"></div>
            <div class="ui grid">
                <div class="eight column row">
                    <div class="left floated column"><p>Total Qty - {cartItemsQuantity}</p></div>
                    <div class="right floated column"><p>Total Rs - {cartItemsTotalPrice}</p></div>
                </div>
            </div>
        </div>

    )
}

const Styles = {
    paddingMargin: {
        marginTop: '50px',
        padding: '50px'
    },
}
export default Cart;