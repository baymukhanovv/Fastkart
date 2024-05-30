import React from 'react'
import CartCard from './CartCard/CartCard'
import styles from './CartList.module.scss'

const CartList = ({cartItems}) => {
    return (
        <div className={styles.cartLayout}>
            {cartItems.length === 0 
                ? 
                <p style={{fontSize: '20px', fontWeight: '600'}}>You don't have favorite products:(</p> 
                :
                <div className={styles.cartContent}>
                    {cartItems.map(product => 
                        <CartCard
                            key={product.id}
                            {...product}
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default CartList