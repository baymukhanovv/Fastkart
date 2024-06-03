import React from 'react'
import styles from './OrderInfo.module.scss'
import { useNavigate } from 'react-router'

const OrderInfo = ({orderById}) => {
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <div className={styles.orderInfo}>
                <div className={styles.header}>
                    <h3>Price Details</h3>
                    <span>({Object.keys(orderById.products).length} items)</span>
                </div>
                <div className={styles.priceDetails}>
                    <div className={styles.subtotal}>
                        <span>Subtotal:</span>
                        <span>${orderById.totalSum}</span>
                    </div>
                    <div className={styles.saving}>
                        <span>Saving Sum: </span>
                        <span>$23.52</span>
                    </div>
                    <div className={styles.couponDiscount}>
                        <span>Coupon Discount:</span>
                        <span>${orderById.couponSum}</span>
                    </div>
                </div>
                <div className={styles.total}>
                    <span>Total (USD)</span>
                    <span>${orderById.totalSum}</span>
                </div>
            </div>
            <div className={styles.goBackBtn} onClick={() => navigate(-1)}>
                Go Back to Orders
            </div>
        </div>
    )
}

export default OrderInfo