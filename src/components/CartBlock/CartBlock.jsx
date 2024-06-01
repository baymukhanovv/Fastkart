import React, { useContext, useEffect, useState } from 'react'
import styles from './CartBlock.module.scss'
import { Link } from 'react-router-dom'
import { usePrice } from '../../hooks/usePrice'
import AppContext from '../../context'

let coupons = [
    'anuar',
    '2008',
    'javascript'
]

const CartBlock = ({cartItems, setOrderIsPlaced}) => {
    const [totalSumOfProducts, setTotalSumOfProducts] = useState(0)
    const {calculatePriceWithDiscount} = usePrice()
    const [couponName, setCouponName] = useState('')
    const [couponIsCorrect, setCouponIsCorrect] = useState(false)
    const [couponSum, setCouponSum] = useState(0)
    const {addProductsToOrders} = useContext(AppContext)

    useEffect(() => {
        const totalSum = cartItems.reduce((a, b) => {
            return a + b.productQuanity * calculatePriceWithDiscount(b.productPrice, b.productDiscount)
        }, 0)
        setTotalSumOfProducts(totalSum)
    }, [cartItems])

    function getCouponName(e) {
        setCouponName(e.target.value)
    }

    function checkCoupon() {
        if (coupons.includes(couponName) && cartItems.length !== 0) {
            const newCoupons = coupons.filter(coupon => coupon !== couponName)
            coupons = newCoupons
            setCouponIsCorrect(true)
            setTotalSumOfProducts(prev => prev - 6.90)
            setCouponSum(prev => prev + 6.90)
        }
        setCouponName('')
    }

    function placeOrder() {
        if(cartItems.length !== 0) {
            addProductsToOrders(couponSum, totalSumOfProducts)
            setOrderIsPlaced(true)
            setTimeout(() => {
                setOrderIsPlaced(false)
            }, 2200);
        }
    }

    return (
        <div className={styles.cartBlock}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Cart Total</h3>
                <div className={styles.cartInfo}>
                    <div className={styles.coupon}>
                        <p>Coupon Apply</p>
                        <div className={styles.couponInputBlock}>
                            <input onChange={(e) => getCouponName(e)} value={couponName} type="text" placeholder='Enter Coupon Code Here...' />
                            {couponName.length !== 0 && <span onClick={() => setCouponName('')}>X</span>}
                            <button onClick={checkCoupon}>Apply</button>
                        </div>
                    </div>
                    <div className={styles.subtotal}>
                        <span>Subtotal:</span>
                        <span>${totalSumOfProducts.toFixed(2)}</span>
                    </div>
                    <div className={styles.couponDiscount}>
                        <span>Coupon Discount:</span>
                        <span>${couponIsCorrect ? couponSum.toFixed(2) : '0.00'}</span>
                    </div>
                    <div className={styles.shipping}>
                        <span>Shipping:</span>
                        <span>$0.00</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.totalSum}>
                        <span>Total (USD)</span>
                        <span>${totalSumOfProducts.toFixed(2)}</span>
                    </div>
                    <button className={styles.checkoutBtn} onClick={placeOrder}>
                            Place Order
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