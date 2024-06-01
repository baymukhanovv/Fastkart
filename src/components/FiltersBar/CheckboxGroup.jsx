import React, { useContext } from 'react'
import styles from './FiltersBar.module.scss'
import AppContext from '../../context'

const CheckboxGroup = ({categories, selectedCategories,setSelectedCategories, products, filterBy}) => {
    const {filterBy: filter} = useContext(AppContext)

    return (
        <div className={styles.checkboxes}>
            {categories.map(category => (
                <div className={styles.checkbox} key={category}>
                    <input
                        checked={selectedCategories.includes(category)}
                        onChange={() => filter(setSelectedCategories, selectedCategories, category)}
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