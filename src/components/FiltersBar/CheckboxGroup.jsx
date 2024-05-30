import React from 'react'
import styles from './FiltersBar.module.scss'

const CheckboxGroup = ({categories, selectedCategories, filteredByCategories, products, filterBy}) => {
    return (
        <div className={styles.checkboxes}>
            {categories.map(category => (
                <div className={styles.checkbox} key={category}>
                    <input
                        checked={selectedCategories.includes(category)}
                        onChange={() => filteredByCategories(category)}
                        type="checkbox"
                        className={styles.checkboxInput}
                    />
                    <span>{category}</span>
                    <span>({products.filter(product => product[filterBy] === category).length})</span>
                </div>
            ))}
        </div>
    )
}

export default CheckboxGroup