import React, { useContext } from 'react'
import styles from './FiltersBar.module.scss'
import AppContext from '../../context'

const SelectedCategories = ({selectedCategories}) => {
    const {filterBy, setSelectedCategories} = useContext(AppContext)
    
    return (
        <div className={styles.filters}>
            {selectedCategories.map(category => 
                <div className={styles.filter} key={category}>
                    <span>{category}</span>
                    <button onClick={() => filterBy(setSelectedCategories, selectedCategories, category)}>
                        <img src="../../../assets/icons/cross-icon.svg" alt="" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default SelectedCategories