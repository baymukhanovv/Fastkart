import React from 'react'
import styles from './CartBlock.module.scss'
import { Link } from 'react-router-dom'

const CartBlock = () => {
    return (
        <div className={styles.cartBlock}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Cart Total</h3>
                <div className={styles.cartInfo}>
                    <div className={styles.coupon}>
                        <p>Coupon Apply</p>
                        <div className={styles.couponInputBlock}>
                            <input type="text" placeholder='Enter Coupon Code Here...' />
                            <button>Apply</button>
                        </div>
                    </div>
                    <div className={styles.subtotal}>
                        <span>Subtotal:</span>
                        <span>$125.65</span>
                    </div>
                    <div className={styles.couponDiscount}>
                        <span>Coupon Discount:</span>
                        <span>$0.00</span>
                    </div>
                    <div className={styles.shipping}>
                        <span>Shipping:</span>
                        <span>$6.90</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.totalSum}>
                        <span>Total (USD)</span>
                        <span>$140.56</span>
                    </div>
                    <button className={styles.checkoutBtn}>
                        Process To Checkout
                    </button>
                    <Link to='/'>
                        <button className={styles.returnToHomePageBtn}>
                            Return To Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartBlock