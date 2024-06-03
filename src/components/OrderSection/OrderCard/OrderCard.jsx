import React from 'react'
import styles from './OrderCard.module.scss'
import { usePrice } from '../../../hooks/usePrice'

const OrderCard = ({product}) => {
    const {priceWithDiscount} = usePrice(product.productPrice, product.productDiscount)
    
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles.cardContent}>
                    <div className={styles.cardImage}>
                        <img src={`../../../../assets/products/${product.productName}.png`} width={75} height={50} alt="" />
                    </div>
                    <div className={styles.cardInfo}>
                        <p>Info</p>
                        <h5 className={styles.cardName}>{product.productName}</h5>
                        <p className={styles.cardCategory}>Category: <span>{product.productCategory}</span></p>
                        <p className={styles.cardWeight}>Weight: <span>{product.productWeight}g</span></p>
                    </div>
                    <div className={styles.cardPrice}>
                        <p>Price</p>
                        <span className={styles.priceWithDiscount}>${priceWithDiscount}</span>
                        <span className={styles.priceWithoutDiscount}>${product.productPrice}</span>
                        <p className={styles.save}>You save: ${(product.productPrice - priceWithDiscount).toFixed(2)}</p>
                    </div>
                    <div className={styles.quanity}>
                        <p>Qty</p>
                        <span>{product.productQuantity}</span>
                    </div>
                    <div className={styles.total}>
                        <p>Total</p>
                        <span>${(priceWithDiscount * product.productQuantity).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard