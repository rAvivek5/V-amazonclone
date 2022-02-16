import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
import PaymentSuccess from './PaymentSuccess'
import './PaymentForm.css'
import { getBasketTotal } from '../reducer'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
}
const price = 1000

export default function PaymentForm() {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const [{ basket, user }, dispatch] = useStateValue()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post('http://localhost:5000/payment', {
          amount: price,
          id,
        })

        if (response.data.success) {
          console.log('Successful payment')
          setSuccess(true)
        }
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <div className='hight'>
      {/* {(value) => <h3>Order Total: {value}</h3>} */}
      {/* {getBasketTotal(basket)} */}
      {/* <CurrencyFormat
        renderText={(value) => <h3>Order Total: {getBasketTotal(basket)}</h3>}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      /> */}
      <p className='info'>Order Total: {getBasketTotal(basket)}</p>
      <p className='info'>{/* 🔹THAT SUM IS HUGE! No worries MR/MRS🔹 */}</p>
      <p className='info'>
        🔹You can pay via a Dummy Card Numbered '4242 4242 4242 4242' , you
        won't be debited🔹
      </p>

      {/* <div>
        Payment processing Stripe provides APIs that web developers can use to
        integrate payment processing into their websites and mobile
        applications.[9] In April 2018, the company released anti-fraud tools,
        branded "Radar", that block fraudulent transactions.[10] In 2018, the
        company expanded its services to include a billing product for online
        businesses, allowing businesses to manage subscription recurring revenue
        and invoicing.[11] On June 11, 2019, Stripe's point of sale service,
        called Terminal, was made available to U.S. users. Terminal had
        previously been invite-only.[12] The service offers physical credit card
        readers designed to work with Stripe.[13][14] As of July 2020, Terminal
        supports two card readers: Verifone P400 and BBPOS Chipper 2X BT.[15] 
      </div> */}

      
        {!success ? (
          <form onSubmit={handleSubmit}>
            <fieldset className='FormGroup'>
              <div className='FormRow'>
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <div>
              <button className='payButton'>PAY</button>
            </div>
          </form>
        ) : (
          <div>
            <PaymentSuccess />
          </div>
        )}

    </div>
  )
}
