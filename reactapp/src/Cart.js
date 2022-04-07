import React from 'react';
import "./Cart.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CartProduct from './CartProduct';

function Cart() {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map(item => (
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}

            />

          ))}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
        </div>
      </div>
      <div className='cart_right'>
        <Subtotal />
      </div>
    </div>
  )

}
export default Cart
