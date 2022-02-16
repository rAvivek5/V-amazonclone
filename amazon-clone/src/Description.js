import React from 'react'
import { Link } from 'react-router-dom'
import './Description.css'
function Description() {
  return (
    <>
      <div className='description'>
        <p>DESCRIPTION SECTION</p>
        <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />
        </Link>
        <p>UNDER DEVLOPMENT</p>
      </div>
    </>
  )
}

export default Description
