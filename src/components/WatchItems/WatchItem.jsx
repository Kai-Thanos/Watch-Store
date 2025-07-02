import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext';

const WatchItem = ({id, name, price, img}) => {  //From DisplayPro.jsx

  const {cartItems, addToCart, removeFromCart} =useContext(StoreContext);  //From StoreContext.jsx


  return (
    <div className='watch-item' data-aos="fade-up" data-aos-duration="1300">
      <div className="product">
        <img src={img} alt="" />
        <h2>${price}</h2>
        <p>{name}</p>
        <div className="item-count">
            {!cartItems[id]
              // ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              ?<div className="cart-page">
                <div className='add-cart' onClick={()=>addToCart(id)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>ADD TO CART</span>
                </div>
              </div>
              :<ul className='item'>
                  <li onClick={()=>addToCart(id)}><i className="fa-solid fa-plus"></i></li> {/* <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" /> */}
                  <p>{cartItems[id]}</p>
                  <li onClick={()=>removeFromCart(id)} ><i className="fa-solid fa-minus"></i></li> {/* <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" /> */}
              </ul>
            }
        </div>
        <ul className="quick-product">
          <li><i className="fa-regular fa-eye"></i></li>
          <li><i className="fa-solid fa-code-compare"></i></li>
          <li><i className="fa-regular fa-heart"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default WatchItem
