import React, { useState } from 'react'
import CartList from '../components/CartList/CartList'
import CartBlock from '../components/CartBlock/CartBlock'
import { Link } from 'react-router-dom'

const Cart = ({cartItems}) => {
    const [orderIsPlaced, setOrderIsPlaced] = useState(false)
    return (
        <div className="cart">
            {orderIsPlaced ? 
                <div className='notification'>
                    <img width={62} height={110} src="../../assets/icons/order-success.png" alt="" />
                    <h1>Order Success!</h1>
                    <b style={{fontSize: 18}}>
                        You can see the details in your <Link to='/account' style={{textDecoration: 'underline'}}>Account</Link>
                    </b>
                </div>
                :
                <>
                    <h1>Your Cart Of Products:)</h1>
                    <div className="cart-container">
                        <CartList cartItems={cartItems}/>
                        <CartBlock setOrderIsPlaced={setOrderIsPlaced} cartItems={cartItems}/>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart