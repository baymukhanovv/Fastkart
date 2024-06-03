import React, { useContext } from 'react'
import styles from './CartCard.module.scss'
import QuantityCounter from '../../UI/QuantityCounter/QuantityCounter'
import { useCounter } from '../../../hooks/useCounter'
import { usePrice } from '../../../hooks/usePrice'
import AppContext from '../../../context'

const CartCard = (product) => {
    const {
        productInStock, 
        productQuantity, 
        productDiscount, 
        productPrice,
        productWeight,
        productCategory,
        productName
    } = product
    const {count, plusCount, minusCount} = useCounter(productInStock, productQuantity, product)
    const {priceWithDiscount} = usePrice(productPrice, productDiscount)
    const {removeProductFromCart} = useContext(AppContext)
    

    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles.cardContent}>
                    <div className={styles.cardImage}>
                    <span className={styles.modalDiscount}>{productDiscount}% Off</span>
                        <img src={`../../../assets/products/${productName}.png`} width={75} height={50} alt="" />
                    </div>
                    <div className={styles.cardInfo}>
                        <p>Info</p>
                        <h5 className={styles.cardName}>{productName}</h5>
                        <p className={styles.cardCategory}>Category: <span>{productCategory}</span></p>
                        <p className={styles.cardWeight}>Weight: <span>{productWeight}g</span></p>
                    </div>
                    <div className={styles.cardPrice}>
                        <p>Price</p>
                        <span className={styles.priceWithDiscount}>${priceWithDiscount}</span>
                        <span className={styles.priceWithoutDiscount}>${productPrice}</span>
                        <p className={styles.save}>You save: ${(productPrice - priceWithDiscount).toFixed(2)}</p>
                    </div>
                    <div className={styles.quanity}>
                        <p>Quanity</p>
                        <QuantityCounter
                            count={count}
                            minusCount={minusCount}
                            plusCount={plusCount}
                        />
                    </div>
                    <div className={styles.total}>
                        <p>Total</p>
                        <span>${(priceWithDiscount * count).toFixed(2)}</span>
                    </div>
                    <div className={styles.actions}>
                        <p>Action</p>
                        <button onClick={() => removeProductFromCart(product.id)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard