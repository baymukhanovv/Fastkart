import React from 'react'
import OrderSection from '../components/OrderSection/OrderSection'
import { useParams } from 'react-router'

const OrderById = () => {
    const {id} = useParams()
    return (
        <OrderSection id={id} />
    )
}

export default OrderById