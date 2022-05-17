import React from 'react'
import { Link } from 'react-router-dom'
import { NotificationContainer, } from 'react-notifications';
import { useSelector } from 'react-redux';


const Header = () => {
    const {cartItemsQuantity}=useSelector((state)=>state.allProducts)
    console.log(cartItemsQuantity)
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>

                <Link className="item" to='/'>
                    E-Commerse
                </Link>
                <div className="right menu">
                    <Link className="ui item" to='/cart'>
                        <div class="ui label">
                            <i class="shopping cart icon"></i>{cartItemsQuantity?cartItemsQuantity:''}
                        </div>
                    </Link>

                </div>
                <NotificationContainer />
                <br />
                <hr />
            </div>
        </div>
    )
}


export default Header;