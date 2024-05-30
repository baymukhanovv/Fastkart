import React from 'react'
import styles from './FiltersBar.module.scss'

const SelectedCategories = ({selectedCategories, filteredByCategories}) => {
    return (
        <div className={styles.filters}>
            {selectedCategories.map(category => 
                <div className={styles.filter}>
                    <span>{category}</span>
                    <button onClick={() => filteredByCategories(category)}><img src="../../../assets/icons/cross-icon.svg" alt="" /></button>
                </div>
            )}
        </div>
    )
}

export default SelectedCategories