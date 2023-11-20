import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Admin from "./pages/Admin"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import CrakersStack from "./pages/CrakersStack"
import Shops from "./pages/Shops"
import CrackersData from "./pages/Crackersdata"
import ResetPassword from "./pages/ResetPassword"

function App() {

  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <HomePage productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/admin' exact>
             <Admin/>
          </Route>
          <Route path='/login' exact>
             <Login/>
          </Route>
          <Route path='/signup' exact>
             <SignUp/>
          </Route>
          <Route path='/crackers-stack' exact>
             <CrakersStack/>
          </Route>
          <Route path='/crackers-data' exact>
            <CrackersData/>
          </Route>
          <Route path='/shops' exact>
            <Shops/>
          </Route>
          <Route path="/resetpassword" exact>
              <ResetPassword/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

