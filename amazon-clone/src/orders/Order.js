import React from 'react'
import './Order.css' 
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className='order'>
      <p>ORDER AND RETURN SECTION</p>
      <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />
        </Link>
      <p>UNDER DEVLOPMENT</p>
    </div>
  )
}

export default Order
