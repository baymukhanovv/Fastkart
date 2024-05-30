import React, { useContext } from 'react'
import styles from './ProductsList.module.scss'
import ProductCard from './ProductCard/ProductCard'
import AppContext from '../../context'


const ProductsList = ({isLoading}) => {
    const {products, searchValue, selectedCategories, selectedPreferences, selectedRating, selectedWeights} = useContext(AppContext)

    const filteredProducts = searchValue || selectedCategories 
            ? products
                .filter(product => product.productName.toLowerCase().includes(searchValue.toLowerCase()))
                .filter(product => selectedCategories.length !== 0 ? selectedCategories.includes(product.productCategory) : product)
                .filter(product => selectedPreferences.length !== 0 ? selectedPreferences.includes(product.productPreference) : product)
                .filter(product => selectedRating.length !== 0 ? selectedRating.includes(product.productRating) : product)
                .filter(product => selectedWeights.length !== 0 ? selectedWeights.some(obj => obj.from < product.productWeight && product.productWeight <= obj.to) : product)
            : products

    return (
        <div className={styles.productsList}>
            <div className={styles.wrapper}>
                {(isLoading ? [...Array(8)] : filteredProducts).map((product, i) => (
                    <ProductCard 
                        key={product ? product.id : i}
                        {...product}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList