import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import AppContext from "./context";
import AboutUs from "./pages/AboutUs";
import ProductModal from "./components/ProductModal/ProductModal";

const DATA_URL = "http://localhost:3001";
const PRODUCTS_URL = `${DATA_URL}/products`;
const CART_URL = `${DATA_URL}/cart`;
const FAVORITES_URL = `${DATA_URL}/favorites`;
// const PURCHASES_URL = `${DATA_URL}/purchases`;

function App() {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPreferences, setSelectedPreferences] = useState([])
  const [selectedRating, setSelectedRating] = useState([])
  const [selectedWeights, setSelectedWeights] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [modalActive, setModalActive] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    async function fetchDatas() {
        try {
          // I used the json-server for saving datas
          const {data: dataProducts} = await axios.get(PRODUCTS_URL)
          const {data: dataFavorites} = await axios.get(FAVORITES_URL)
          const {data: dataCartProducts} = await axios.get(CART_URL)
          setIsLoading(false)
          setCartItems(dataCartProducts)
          setFavorites(dataFavorites)
          setProducts(dataProducts)
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

  function addToFavorites(productInfo) {
    try {
      if(favorites.some(product => Number(product.id) === Number(productInfo.id))) {
        axios.delete(`${FAVORITES_URL}/${productInfo.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(productInfo.id)))
      } else {
        axios.post(FAVORITES_URL, productInfo)
        setFavorites(prev => [...prev, productInfo])
      }
    } catch (error) {
      alert('Product couldn\'nt be added to Favorites')
    }
  }

  function productIsFavorite(id) {
    return favorites.some(product => Number(product.id) === Number(id))
  }

  function addToCart(productInfo, quanityAdd, operator = '+') {
    if(productInfo.productInStock) {
      try {
        const existingProduct = cartItems.find(product => Number(product.id) === Number(productInfo.id))
        if(existingProduct) {
          const updatedDescreasedProduct = {...productInfo, productQuanity: existingProduct.productQuanity > 1 ? existingProduct.productQuanity - quanityAdd : 1 }
          const updatedIncreasedProduct = {...productInfo, productQuanity: existingProduct.productQuanity + quanityAdd}
          const updatedProduct = (operator === '+') ? updatedIncreasedProduct : updatedDescreasedProduct
          axios.put(`${CART_URL}/${productInfo.id}`, updatedProduct)
            .then(() => {
              setCartItems(prev => prev.map(item => Number(item.id) === Number(productInfo.id) ? updatedProduct : item))
            })
            .catch(error => {
              console.error('Product isn\'t updated')
            })
        } else {
          const newProduct = {...productInfo, productQuanity: quanityAdd}
          axios.post(CART_URL, newProduct)
            .then(() => {
              setCartItems(prev => [...prev, newProduct])
            })
            .catch(error => {
              console.error('Product isn\'t added to Cart')
            })
        }
      } catch (error) {
        alert('Product couldn\'t be added to Cart')
      }
    } else {
      alert('Product is out of stock')
    }
  }

  function removeProductFromCart(productId) {
    try {
      axios.delete(`${CART_URL}/${productId}`)
        .then(() => {
          setCartItems(prev => prev.filter(item => Number(item.id) !== Number(productId)))
        })
    } catch (error) {
      console.log('Product couldn\'t be removed from the Cart')
    }
  }

  return (
    <AppContext.Provider value={{ setSelectedProduct, removeProductFromCart,
      searchValue, getSearchValue, products, selectedCategories, selectedPreferences, selectedRating, selectedWeights,addToFavorites, productIsFavorite, addToCart, setModalActive, modalActive
    }}>
      <div className="App">
          <Header favorites={favorites} cartItems={cartItems} />
          <Routes>
            <Route path="/" element={
              <Homepage 
                getSearchValue={getSearchValue}
                filteredByCategories={filteredByCategories}
                filteredByPreferences={filteredByPreferences}
                filteredByRating={filteredByRating}
                filteredByWeights={filteredByWeights}
                setSelectedCategories={setSelectedCategories}
                isLoading={isLoading}
              />
            } />
            <Route path="/favorites" element={
              <Favorites 
                favorites={favorites}
                isLoading={isLoading} 
              />
            } />
            <Route path="/cart" element={
              <Cart 
                cartItems={cartItems}
              />
            } />
            <Route path="/account" element={
              <Account />
            } />
            <Route path="/about us" element={
              <AboutUs />
            } />
          </Routes>
          {modalActive && <ProductModal selectedProduct={selectedProduct}></ProductModal>}
      </div>
    </AppContext.Provider>
  );
}

export default App;