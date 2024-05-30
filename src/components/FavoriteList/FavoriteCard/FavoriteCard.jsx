import React, { useContext } from 'react'
import styles from './FavoriteCard.module.scss'
import { usePrice } from '../../../hooks/usePrice'
import AppContext from '../../../context'

const FavoriteCard = (product) => {
    const {
        productInStock, 
        productCategory,
        productWeight,
        productDiscount, 
        productPrice,
        productName
    } = product
    console.log(product)
    const {priceWithDiscount} = usePrice(productPrice, productDiscount)
    const {addToFavorites, productIsFavorite, addToCart} = useContext(AppContext)

    return (
        <div className={styles.favoriteCard}>
            <div className={styles.wrapper}>
            <div className={styles.cardContent}>
                    <div className={styles.cardImage}>
                    <span className={styles.modalDiscount}>{productDiscount}% Off</span>
                        <img src={`../../../assets/products/${productName}.png`} width={75} height={50} alt="" />
                    </div>
                    <div className={styles.cardInfo}>
                        <p>Product</p>
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
                    <div className={styles.cardStatus}>
                        <p>Stock Status</p>
                        <span className={productInStock ? styles.modalInStock + ' ' + styles.has : styles.modalInStock + ' ' + styles.hasnot}>{productInStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <div className={styles.actions}>
                        <p>Actions</p>
                        <div className={styles.buttons}>
                            <button className={styles.addBtn} onClick={() => addToCart(product, 1, '+')}>
                                <img width={30} height={29} src="../../../../assets/icons/bag-icon.svg" alt="" />
                            </button>
                            <button onClick={() => addToFavorites(product)} className={styles.favoriteBtn}>
                                <img width={30} height={30} src={`../../../../assets/icons/${productIsFavorite(product.id) ? 'is-favorite' : 'favorite-icon'}.svg`} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard