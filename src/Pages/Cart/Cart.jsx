import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

    const {cartItems, product_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext) //From StoreContext.jsx
    const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-title">
        <h1>YOUR SHOPPING CART</h1>
        <p>Insert a section on the cart page to show the customer the total cost of the order and shipping.</p>
      </div>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
      {product_list.map((item, index)=>{
        if(cartItems[item._id]>0){
          return(
            <div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.img} alt="" />
                <p className='title'>{item.name}</p>
                <p className='price'>$ {item.price}</p>
                <p className='quantity'>{cartItems[item._id]}</p>
                <p className='total'>$ {item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
            </div>
          )
        }
      })}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <hr />
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>{navigate('/order')}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
