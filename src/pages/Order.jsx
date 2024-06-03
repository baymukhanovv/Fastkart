import React, { useContext } from 'react'
import AppContext from '../context'
import OrderView from '../components/OrderView/OrderView'

const Order = () => {
    const {orders} = useContext(AppContext)
    return (
        <div>
            <h1>My Orders</h1>
            {orders.map(order => (
                <OrderView order={order} key={order.id} />
            ))}
        </div>
    )
}

export default Order