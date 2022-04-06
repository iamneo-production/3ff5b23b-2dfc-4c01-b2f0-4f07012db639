import React from 'react';
import "./Cart.css";
import Subtotal from './Subtotal';

function Cart() {
  return (
    <div className='cart'>
      <div className='cart_left'>
        <img
          className='cart_ad'
          src='https://image.shutterstock.com/image-vector/promo-sale-banner-bookstore-bookshop-260nw-1971130367.jpg'
          alt=''
        />
        <div>
          <h2 className='cart_title'>Your
          Shopping Basket</h2>
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
        </div>
      </div>
      <div className='cart_right'>
        <Subtotal/>
      </div>
    </div>
  ) 

}
export default Cart