import React from "react"
import Home from "../components/mainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Shop from "../components/shops/Shop"

const HomePage = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
    </>
  )
}

export default HomePage
