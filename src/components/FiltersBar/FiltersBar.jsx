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
    filteredByCategories,
    filteredByPreferences,
    filteredByRating,
    filteredByWeights
}) => {
    
    const {products, searchValue, selectedCategories} = useContext(AppContext)

    return (
        <div className={styles.filtersBar}>
            <FiltersHeader setSelectedCategories={setSelectedCategories} />
            <SelectedCategories 
                selectedCategories={selectedCategories}  
                filteredByCategories={filteredByCategories}
            />
            <CategoryFilter 
                filteredByCategories={filteredByCategories}
                products={products}
                selectedCategories={selectedCategories}
                getSearchValue={getSearchValue}
                searchValue={searchValue}
            />
            <PreferencesFilter 
                products={products}
                filteredByPreferences={filteredByPreferences}
            />
            <RatingFilter 
                products={products}
                filteredByRating={filteredByRating}
            />
            <WeightFilter 
                products={products}
                filteredByWeights={filteredByWeights}
            />
        </div>
    )
}

export default FiltersBar