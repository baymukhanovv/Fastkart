import React from 'react'
import FiltersBar from '../components/FiltersBar/FiltersBar'
import ProductsList from '../components/ProductsList/ProductsList'

const Homepage = ({
    getSearchValue,
    filteredByWeights,
    setSelectedCategories,
    isLoading
}) => {

    return (
        <div className="homepage-container">
          <FiltersBar 
            getSearchValue={getSearchValue}
            filteredByWeights={filteredByWeights}
            setSelectedCategories={setSelectedCategories}
          />
          <ProductsList isLoading={isLoading} />
        </div>
    )
}

export default Homepage