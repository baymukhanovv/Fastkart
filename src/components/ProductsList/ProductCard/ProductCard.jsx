import React, { useContext, useRef } from 'react'
import styles from './ProductCard.module.scss'
import ContentLoader from "react-content-loader"
import { useHover } from '../../../hooks/useHover'
import { usePrice } from '../../../hooks/usePrice'
import AppContext from '../../../context'

const ProductCard = (product) => {
    const ref = useRef()
    const isHovering = useHover(ref)
    const {addToFavorites, productIsFavorite, addToCart, setModalActive, setSelectedProduct} = useContext(AppContext)
    const {
        id,
        productName, 
        productCategory, 
        productRating, 
        productWeight, 
        productDiscount,
        productPrice,
        productInStock,
        isLoading = false
    } = product
    const {priceWithDiscount} = usePrice(productPrice, productDiscount)
    const openModal = () => {
        setModalActive(true)
        setSelectedProduct(product)
    }

    return (
        <div ref={ref} className={styles.productCard}>
            {isLoading ?
                (<ContentLoader 
                    speed={2}
                    width={270}
                    height={360}
                    viewBox="0 0 300 400"
                    backgroundColor="#ebebeb"
                    foregroundColor="#bdbdbd"
                  >
                    <rect x="0" y="8" rx="0" ry="0" width="300" height="154" /> 
                    <rect x="0" y="190" rx="0" ry="0" width="70" height="17" /> 
                    <rect x="0" y="220" rx="0" ry="0" width="300" height="35" /> 
                    <rect x="0" y="277" rx="0" ry="0" width="120" height="16" /> 
                    <rect x="0" y="300" rx="0" ry="0" width="40" height="14" /> 
                    <rect x="0" y="319" rx="0" ry="0" width="107" height="22" /> 
                    <rect x="0" y="350" rx="0" ry="0" width="300" height="41" />
                </ContentLoader>)
                : 
                (<>
                    {!productInStock && <span className={styles.outOfStock}>Out of Stock</span>}
                    <div className={isHovering ? `${styles.actions} ${styles.hover}` : styles.actions}>
                        <button onClick={() => addToFavorites(product)} className={styles.favoriteBtn}>
                            <img width={30} height={30} src={productIsFavorite(id) ? "../../../../assets/icons/is-favorite.svg" : "../../../../assets/icons/favorite-icon.svg"} alt="" />
                        </button>
                        <button className={styles.modalBtn} onClick={openModal}>
                            <img width={30} height={30} src="../../../../assets/icons/eye-modal.svg" alt="" />
                        </button>
                    </div>
                    <img className={styles.productImg} src={`../../../../assets/products/${productName}.png`} width={224} height={140} alt="productImage" />
                    <p className={styles.categoryName}>{productCategory}</p>
                    <h4 className={styles.productName}>{productName}</h4>
                    <div className={styles.productRating}>
                        <img src={`../../../../assets/ratings/${productRating} Star.png`} alt="" />
                        <span className={styles.rating}>({productRating}.0)</span>    
                    </div>
                    <div className={styles.productWeight}>{productWeight}g</div>
                    <div className={styles.productPrice}>
                        <span className={styles.priceWithDiscount}>${priceWithDiscount}</span>
                        <span className={styles.priceWithoutDiscount}>${productPrice}</span>
                    </div>
                    <button className={styles.addBtn} onClick={() => addToCart(product, 1, '+')}>
                        <span>Add</span>
                        <span className={styles.plus}>+</span>
                    </button>
                </>)
            }
        </div>
    )
}

export default ProductCard