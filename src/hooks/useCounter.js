import { useContext, useState } from 'react'
import AppContext from '../context'

export const useCounter = (productInStock, productQuanity, product) => {
    const [count, setCount] = useState(productQuanity)
    const {addToCart} = useContext(AppContext)

    function minusCount() {
        setCount(prev => prev <= 1 ? prev : prev - 1)
        if(product !== null) addToCart(product, 1, '-')
    }

    function plusCount() {
        if(productInStock) {
            setCount(prev => prev + 1)
            if(product !== null) addToCart(product, 1, '+')
        } else {
            alert('This Product out of stock:(')
        }
    }

    return {count, minusCount, plusCount}
}
