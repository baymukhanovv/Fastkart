import { useState, useEffect } from "react";
import axios from "axios";
import FiltersBar from "./components/FiltersBar/FiltersBar";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    async function fetchDatas() {
        const {data} = await axios.get('https://66407319a7500fcf1a9dcc8f.mockapi.io/products')
          setProducts(data)
      }
      fetchDatas()
  }, [])

  function getSearchValue(e) {
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
        <Header />
        <div className="container app-container">
          <FiltersBar 
            searchValue={searchValue}
            getSearchValue={getSearchValue}
          />
          <ProductsList 
            searchValue={searchValue}
            products={products}
          />
        </div>
    </div>
  );
}

export default App;