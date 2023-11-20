import React from "react"
import "./style.css"
import { useState } from "react"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [addres,setAddres]=useState("")
  const [contact,setContact]=useState("")
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)



  const handleOrder=()=>{

    if(!name|| !email|| !addres ||!contact){
      alert("all fileds are mandatory")
    }
    console.log(name,email,addres,contact)
  }

  return (
    <>
      <section className='cart-items'>
      <div class="form">
        <label>Name</label>
        <br />
        <input type="text" id="name" placeholder="Please enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label>Emali</label>
        <br />
        <input type="email" id="email" placeholder="Please enter your Email Id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label>Addres</label>
        <br />
        <input type="text" id="addres" placeholder="Please enter your Addres" value={addres} onChange={(e)=>setAddres(e.target.value)}/>
        <br />
        <label>Contact No</label>
        <br />
        <input type="number" id="contact" placeholder="Please enter your Contact Number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
      </div>  
        <div className='container d_flex'>

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>e
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
          <div className="Aorder">
            <button className="order" onClick={ handleOrder}>Order</button>
            <button className="corder">Cancel</button>                           
            </div>
            </div>
      </section>
    </>
  )
}

export default Cart
