import React from 'react'
import styles from './FiltersBar.module.scss'

const FiltersHeader = ({setSelectedCategories}) => {
    return (
        <div className={styles.header}>
            <h4 className={styles.title}>Filters</h4>
            <button onClick={() => setSelectedCategories([])} className={styles.clearBtn}>Clear All</button>
        </div>
    )
}

export default FiltersHeader