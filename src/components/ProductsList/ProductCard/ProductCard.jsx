import React from 'react'
import styles from './ProductCard.module.scss'

const ProductCard = ({
    productName, 
    productCategory, 
    productRating, 
    productWeight, 
    productPriceWithDiscount,
    productPriceWithoutDiscount
}) => {
    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={`../../../../assets/products/${productName}.png`} width={224} height={140} alt="productImage" />
            <p className={styles.categoryName}>{productCategory}</p>
            <h4 className={styles.productName}>{productName}</h4>
            <div className={styles.productRating}>
                <img src={`../../../../assets/ratings/${productRating} Star.png`} alt="" />
                <span className={styles.rating}>({productRating}.0)</span>    
            </div>
            <div className={styles.productWeight}>{productWeight}g</div>
            <div className={styles.productPrice}>
                <span className={styles.priceWithDiscount}>${productPriceWithDiscount}</span>
                <span className={styles.priceWithoutDiscount}>${productPriceWithoutDiscount}</span>
            </div>
            <button className={styles.addBtn}>
                <span>Add</span>
                <span className={styles.plus}>+</span>
            </button>
        </div>
    )
}

export default ProductCard