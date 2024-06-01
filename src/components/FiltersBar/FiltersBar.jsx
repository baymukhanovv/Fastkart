import React, { useContext } from 'react'
import styles from './FiltersBar.module.scss'
import AppContext from '../../context'
import FiltersHeader from './FiltersHeader'
import SelectedCategories from './SelectedCategories'
import CategoryFilter from './CategoryFilter'
import PreferencesFilter from './PreferencesFilter'
import RatingFilter from './RatingFilter'
import WeightFilter from './WeightFilter'

const FiltersBar = ({
    getSearchValue,  
    setSelectedCategories,
    filteredByWeights
}) => {
    
    const {products, searchValue, selectedCategories} = useContext(AppContext)

    return (
        <div className={styles.filtersBar}>
            <FiltersHeader setSelectedCategories={setSelectedCategories} />
            <SelectedCategories 
                selectedCategories={selectedCategories}  
            />
            <CategoryFilter 
                products={products}
                getSearchValue={getSearchValue}
                searchValue={searchValue}
            />
            <PreferencesFilter 
                products={products}
            />
            <RatingFilter />
            <WeightFilter 
                products={products}
                filteredByWeights={filteredByWeights}
            />
        </div>
    )
}

export default FiltersBar