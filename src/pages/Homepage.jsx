import React from 'react'
import FiltersBar from '../components/FiltersBar/FiltersBar'
import ProductsList from '../components/ProductsList/ProductsList'

const Homepage = ({
    getSearchValue,
    filteredByCategories,
    filteredByPreferences,
    filteredByRating,
    filteredByWeights,
    setSelectedCategories
}) => {

    return (
        <>
          <FiltersBar 
            getSearchValue={getSearchValue}
            filteredByCategories={filteredByCategories}
            filteredByPreferences={filteredByPreferences}
            filteredByRating={filteredByRating}
            filteredByWeights={filteredByWeights}
            setSelectedCategories={setSelectedCategories}
          />
          <ProductsList />
        </>
    )
}

export default Homepage