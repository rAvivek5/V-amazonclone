import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY =
  'pk_test_51JkbP1SEFrZN35BLHCHMekxcGNMZ4rtbSH0XE34SgolihANfwuHcjVa7yu25kCO41Wq3s2d3tu84rWiaGQwMaQIE00QpqsVVRJ'

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
  return (
  
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}