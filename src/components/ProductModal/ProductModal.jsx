import React, { useContext } from 'react'
import Modal from '../UI/Modal/Modal'
import styles from './ProductModal.module.scss'
import AppContext from '../../context'
import QuanityCounter from '../UI/QuanityCounter/QuanityCounter'
import {useCounter} from '../../hooks/useCounter'
import { usePrice } from '../../hooks/usePrice'

const ProductModal = ({selectedProduct}) => {
    const {
        id,
        productCategory,
        productName,
        productRating,
        productWeight,
        productDiscount,
        productPrice,
        productReview,
        productDescription,
        productInStock
    } = selectedProduct
    const {addToFavorites, productIsFavorite, setModalActive, addToCart} = useContext(AppContext)

    const {count, minusCount, plusCount} = useCounter(productInStock, 0, null)
    const {priceWithDiscount} = usePrice(productPrice, productDiscount)

    return (
        <Modal>
            <div className={styles.modalWrapper}>
                <div className={styles.modalImage}>
                    <img src={`../../../assets/products/${productName}.png`} alt="" />
                </div>
                <div className={styles.modalInfo}>
                    <button className={styles.modalCrossBtn} onClick={() => setModalActive(false)}></button>
                    <div className={styles.modalHeader}>
                        <h1 className={styles.modalName}>{productName}</h1>
                        <span className={productInStock ? styles.modalInStock + ' ' + styles.has : styles.modalInStock + ' ' + styles.hasnot}>{productInStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <div className={styles.modalRating}>
                        <p>Rating:</p>
                        <img src={`../../../assets/ratings/${productRating} Star.png`} alt="" />
                        <span>{productReview} {productReview > 1 ? 'reviews' : 'review'}</span>
                    </div>
                    <div className={styles.modalPrice}>
                        <span className={styles.withoutDiscount}>${productPrice}</span>
                        <span className={styles.withDiscount}>${priceWithDiscount}</span>
                        <span className={styles.modalDiscount}>{productDiscount}% Off</span>
                    </div>
                    <div className={styles.modalDesc}>
                        <p>Description:</p>
                        {productDescription}
                    </div>
                    <div className={styles.modalActions}>
                        <QuanityCounter 
                            count={count}
                            plusCount={plusCount}
                            minusCount={minusCount}
                        />
                        <button className={styles.addBtn} onClick={() => count !== 0 && addToCart(selectedProduct, count)}>Add To Cart</button>
                        <button onClick={() => addToFavorites(selectedProduct)} className={styles.favoriteBtn}>
                            <img width={30} height={30} src={`../../../../assets/icons/${productIsFavorite(id) ? 'is-favorite' : 'favorite-icon'}.svg`} alt="" />
                        </button>
                    </div>
                    <p className={styles.modalCategory}>
                        <span>Category: </span> 
                        {productCategory}
                    </p>
                    <p className={styles.modalWeight}>  
                        <span>Weight:</span> {productWeight}g
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default ProductModal