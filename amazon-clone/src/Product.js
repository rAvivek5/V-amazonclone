import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'

function Product({ id, title, image, price, rating }) {
  const [basket, dispatch] = useStateValue()
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  const description = () => {
    // dispatch the item into the data layer
    dispatch({
      type: ' ',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          {/* <small>₹ </small> */}
          <strong>
            {/* {price} */}
            <CurrencyFormat
              renderText={(value) => <h3>{value}</h3>}
              decimalScale={2}
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
            />
          </strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <Link to='/description'>
        <div className='productimg'>
          <img className='product__img' onClick={description} src={image} alt='' />
        </div>
      </Link>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
