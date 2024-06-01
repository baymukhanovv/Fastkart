import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import AppContext from "./context";
import ProductModal from "./components/ProductModal/ProductModal";
import { useFetching } from "./hooks/useFetching";
import Layout from "./layout/Layout";

const DATA_URL = "http://localhost:3001";
const PRODUCTS_URL = `${DATA_URL}/products`;
const CART_URL = `${DATA_URL}/cart`;
const FAVORITES_URL = `${DATA_URL}/favorites`;
const ORDERS_URL = `${DATA_URL}/orders`;

function App() {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [orders, setOrders] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPreferences, setSelectedPreferences] = useState([])
  const [selectedRating, setSelectedRating] = useState([])
  const [selectedWeights, setSelectedWeights] = useState([])

  const [fetchDatas, isLoading] = useFetching(async () => {
    const {data: dataProducts} = await axios.get(PRODUCTS_URL)
    const {data: dataFavorites} = await axios.get(FAVORITES_URL)
    const {data: dataCartProducts} = await axios.get(CART_URL)
    const {data: dataOrders} = await axios.get(ORDERS_URL)
    setOrders(dataOrders)
    setCartItems(dataCartProducts)
    setFavorites(dataFavorites)
    setProducts(dataProducts)
  })

  const [modalActive, setModalActive] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
      fetchDatas()
  }, [])

  function getSearchValue(e) {
    setSearchValue(e.target.value)
  }

  function filterBy(setter, selectedArray, value) {
    setter(prev => {
      if(selectedArray.includes(value)) {
        return prev.filter(val => val !== value)
      } else {
        return [...prev, value]
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
              console.error('Product isn\'t updated', error)
            })
        } else {
          const newProduct = {...productInfo, productQuanity: quanityAdd}
          axios.post(CART_URL, newProduct)
            .then(() => {
              setCartItems(prev => [...prev, newProduct])
            })
            .catch(error => {
              console.error('Product isn\'t added to Cart', error)
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

  async function addProductsToOrders(couponSum, totalSum) {
    try {
      const {data} = await axios.get(ORDERS_URL)
      const {data: productsFromCart} = await axios.get(CART_URL)
      for(let i = 0; i < productsFromCart.length; i++) {
        await axios.delete(`${CART_URL}/${productsFromCart[i].id}`)
      }
      fetchDatas()
      const newOrder = {
        id: data.length + 1,
        couponSum,
        totalSum,
        products: {...productsFromCart}
      }
      await axios.post(ORDERS_URL, newOrder)
      setOrders(prev => [...prev, newOrder])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppContext.Provider value={{ 
      setSelectedProduct, removeProductFromCart,addProductsToOrders,
      searchValue, getSearchValue, products, selectedCategories, selectedPreferences, 
      selectedRating, selectedWeights,addToFavorites, productIsFavorite, addToCart, setModalActive,
      modalActive, filterBy, setSelectedCategories, setSelectedPreferences, setSelectedRating
    }}>
      <div>
          <Routes>
            <Route path="/" element={
              <Layout
                cartItems={cartItems}
                favorites={favorites}
              />
            }>
              <Route index element={
                <Homepage 
                  getSearchValue={getSearchValue}
                  filteredByWeights={filteredByWeights}
                  setSelectedCategories={setSelectedCategories}
                  isLoading={isLoading}
                />
              } />
              <Route path="favorites" element={
                <Favorites 
                  favorites={favorites}
                  isLoading={isLoading} 
                />
              } />
              <Route path="cart" element={<Cart cartItems={cartItems} />}/>
              <Route path="account" element={
                <Account />
              } />
            </Route>
          </Routes>
          {modalActive && <ProductModal selectedProduct={selectedProduct}></ProductModal>}
      </div>
    </AppContext.Provider>
  );
}

export default App;