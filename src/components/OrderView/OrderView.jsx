import React from 'react'
import styles from './OrderView.module.scss'
import { Link } from 'react-router-dom'

const OrderView = ({order}) => {
    const products = order.products
    return (
        <div className={styles.orderCard}>
            <div>Order Id: <span>{order.id}</span></div>
            <div>Products: <span>{Object.keys(products).length} items</span></div>
            <div>Total Sum: <span>${order.totalSum}</span></div>
            <Link to={`${order.id}`} className={styles.link}>View Details</Link>
        </div>
    )
}

export default OrderView