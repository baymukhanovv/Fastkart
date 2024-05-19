import { useState, useEffect } from "react";
import axios from "axios";
import FiltersBar from "./components/FiltersBar/FiltersBar";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPreferences, setSelectedPreferences] = useState([])
  const [selectedRating, setSelectedRating] = useState([])
  const [selectedWeights, setSelectedWeights] = useState([])

  useEffect(() => {
    async function fetchDatas() {
        try {
          const {data} = await axios.get('https://66407319a7500fcf1a9dcc8f.mockapi.io/products')
          setProducts(data)
        } catch (error) {
          alert('error')
        }
      }
      fetchDatas()
  }, [])

  function getSearchValue(e) {
    setSearchValue(e.target.value)
  }

  function filteredByCategories(category) {
    setSelectedCategories(prev => {
      if(selectedCategories.includes(category)) {
        return prev.filter(val => val !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  function filteredByPreferences(preference) {
    setSelectedPreferences(prev => {
      if(selectedPreferences.includes(preference)) {
        return prev.filter(val => val !== preference)
      } else {
        return [...prev, preference]
      }
    })
  }

  function filteredByWeights(weight) {
    setSelectedWeights(prev => {
      if(prev.some(item => item.from === weight.from)) {
        return prev.filter(obj => obj.from !== weight.from)
      } else {
        return [...prev, weight]
      }
    }) 
  }

  function filteredByRating(rating) {
    setSelectedRating(prev => {
      if(selectedRating.includes(rating)) {
        return prev.filter(val => val !== rating)
      } else {
        return [...prev, rating]
      }
    })
  }

  return (
    <div className="App">
        <Header />
        <div className="container app-container">
          <FiltersBar 
            searchValue={searchValue}
            getSearchValue={getSearchValue}
            products={products}
            filteredByCategories={filteredByCategories}
            filteredByPreferences={filteredByPreferences}
            filteredByRating={filteredByRating}
            filteredByWeights={filteredByWeights}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <ProductsList 
            searchValue={searchValue}
            products={products}
            selectedCategories={selectedCategories}
            selectedPreferences={selectedPreferences}
            selectedRating={selectedRating}
            selectedWeights={selectedWeights}
          />
        </div>
    </div>
  );
}

export default App;