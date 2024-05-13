import React from 'react'
import styles from './ProductsList.module.scss'
import ProductCard from './ProductCard/ProductCard'

const ProductsList = ({products, searchValue}) => {

    return (
        <div className={styles.productsList}>
            <div className='container'>
                <div className={styles.wrapper}>
                    {(searchValue ? products.filter(product => product.productName.toLowerCase().includes(searchValue.toLowerCase())) : products).map(product => (
                        <ProductCard 
                            key={product.id}
                            productName={product.productName}
                            productCategory={product.productCategory}
                            productRating={product.productRating}
                            productWeight={product.productWeight}
                            productPriceWithDiscount={product.productPriceWithDiscount}
                            productPriceWithoutDiscount={product.productPriceWithoutDiscount}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsList