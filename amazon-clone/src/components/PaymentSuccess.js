import React from 'react'
import './PaymentForm.css'
import { Link } from 'react-router-dom'
function PaymentSuccess() {
  return (
    <div className='hight'>
      <div className='flex'>
        <img
          className='success__image'
          src='https://ouch-cdn2.icons8.com/TIyi_TwwDaYWNNrz6UYuebCzYTllBD9VdmnWfHHc1EA/rs:fit:196:196/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjE3/L2I3Nzc5M2FjLTkz/NGEtNGQzZi04ZWI3/LWI1MzI2YjRlMWJh/OC5zdmc.png'
          alt=''
        />
        <div className='down'>
          <h1 className='success__msg'>💥Your Payment is Successfull!💥</h1>
          <h2 className='success__des'>
            {' '}
            <p>
              🔹An automated payment receipt will be sent to your registered
              email.🔹
            </p>
          </h2>
          <div className='flex'>
            <Link to='/'>
              <img
                className='header__logo__pay'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
