import React from 'react'
import CartList from '../components/CartList/CartList'
import CartBlock from '../components/CartBlock/CartBlock'

const Cart = ({cartItems}) => {
    return (
        <div className="cart">
            <div className="container">
                <h1>Your Cart Of Products:)</h1>
                <div className="cart-container">
                    <CartList cartItems={cartItems}/>
                    <CartBlock />
                </div>
            </div>
        </div>
    )
}

export default Cart