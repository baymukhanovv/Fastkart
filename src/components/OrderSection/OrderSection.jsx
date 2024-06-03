import React, { useContext, useEffect, useState } from 'react'
import styles from './OrderSection.module.scss'
import OrderCard from './OrderCard/OrderCard'
import OrderInfo from './OrderInfo/OrderInfo'
import AppContext from '../../context'

const OrderSection = ({id}) => {
    const {orders} = useContext(AppContext)
    const [orderById, setOrderById] = useState({})
    useEffect(() => {
        setOrderById(orders.length !== 0 && orders.find(order => Number(order.id) === Number(id)))
    }, [orders, id])

    const {products} = orderById
    
    return (    
        <div className={styles.orderPage}>
            <div className={styles.orderCards}>
                {products && products.map(product => 
                    <OrderCard product={product} key={product.id}/>
                )}
            </div>
            {products && <OrderInfo orderById={orderById} />}
        </div>
    )
}

export default OrderSection