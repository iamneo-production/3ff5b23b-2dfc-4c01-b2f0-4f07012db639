import React from 'react'
import './CartProduct.css'
import {useStateValue} from './StateProvider'

function CartProduct({id,image,title,price,rating}) {
  const[{basket},dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id
    })
  }
  return (
    <div classname='cartProduct'>
        <img className='cartProduct_image'src={image}/>
        <div className='cartProduct_info'>
            <p className='cartProduct_title'>{title}</p>
        <p className='cartProduct_price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='cartProduct_rating'>
            {Array(rating)
            .fill().
            map((_,i) =>
            (<p>🌟</p>))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>

    </div>
  )
}

export default CartProduct