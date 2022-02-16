import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Login from './Login'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <>
    {/* using ternary conditional operator */}
    {user ? (
        <div className='checkout'>
          <div className='checkout__left'>
            <img
              className='checkout__ad'
              src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Echodevice21/PDPC05July/PC-PD21-StoreHeader.jpg'
              alt=''
            />
            <div>
              <h3 className='checkUser'>Hello,{user.email} </h3>

              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className='checkout__right'>
            <Subtotal />
          </div>
        </div>
      ) : (
        <div className='notloggedin'>
          <Link to='/login'>
            <a className='checkUser'>🔹please login to Proceed further🔹</a>
            {/* <div className='notloggedinL'>
              <Login />
            </div> */}
          </Link>
        </div>
      )}
    </>
  )
}

export default Checkout
