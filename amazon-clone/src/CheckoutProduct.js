import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    // remove the item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div className='checkoutProduct'>
      
      <Link to='/description'>
        <img className='checkoutProduct__image' src={image} alt='' />
      </Link>
      {/* <Link to='/description'>
        <img className='checkoutProduct__image' src={image} alt='' />
      </Link>
      <Link to='/description'>
        <img className='checkoutProduct__image' src={image} alt='' />
      </Link> */}
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <CurrencyFormat
            renderText={(value) => <h3>{value}</h3>}
            decimalScale={2}
            value={price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
          />
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
