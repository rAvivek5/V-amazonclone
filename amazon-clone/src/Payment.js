import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import StripeContainer from './components/StripeContainer'
import GooglePayButton from '@google-pay/button-react'
import { PayPalButton } from 'react-paypal-button-v2'
import { ApplePayButton } from 'react-apple-pay-button'
import Login from './Login'
function Payment() {
  const [showItem, setShowItem] = useState(false)
  const [{ basket, user }, dispatch] = useStateValue()
  const history = useHistory()
  const stripe = useStripe()
  const element = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  // useEffect(() => {
  //   //generate the special stripe secret which allows us to charge a customer
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: 'post',
  //       url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
  //     })
  //     setClientSecret(response.data.clientSecret)
  //   }
  //   getClientSecret()
  // }, [basket])

  // console.log('The secret is >>>', clientSecret)

  // const handleSubmit = async (Event) => {
  //   // do all fancy stripe stuff
  //   Event.preventDefault()
  //   setProcessing(true)

  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: element.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       //paymentIntent = payment confirmation

  //       setSucceeded(true)
  //       setError(null)
  //       setProcessing(false)

  //       history.replace('/orders')
  //     })
  // }
  // const handleChange = (e) => {
  //   //Listen for changes in the CardElement
  //   // and display
  //   //setDisabled(event.empty);
  //   setDisabled(Event.disabled)
  //   //setError(event.error ? event.error.message: "");
  //   setError(Event.error ? Event.error.message : '')
  // }
  const onRequestApplePay = useCallback(() => /* TODO */ [])
  return (
    <>
      {/* using ternary conditional operator */}
      {basket.length ? (
        <div className='payment'>
          <div className='payment__container'>
            <h1 className='black'>
              Checkout (<Link to='/checkout'>{basket?.length} items </Link>)
            </h1>
            {/* Payment section - delivery address */}
            <div className='payment__section'>
              <div className='payment__title'>
                <h3>Delivery Address</h3>
              </div>
              <div className='payment__address'>
                <p>{user?.email}</p>
                <p>123 Vikas Nagar</p>
                <p>Akola, Maharastra, India 444101 </p>
              </div>
            </div>
            {/* Payment section - Review items */}
            <div className='payment__section'>
              <div className='payment__title'>
                <h3>Review items and delivery</h3>
              </div>
              <div className='payment__items'>
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
            {/* <div className='payment__total'></div> */}
          </div>
          <div className='payment__total'>
            <CurrencyFormat
              renderText={(value) => <h3>Order Total: {value}</h3>}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
            />
            {/* STRIPEEEEEEEEEEEEEEEEEEEEEE */}
            <Link to='paymentViaStripe'>
              {showItem ? (
                <StripeContainer />
              ) : (
                <>
                  <button
                    className='payment__button'
                    onClick={() => setShowItem(true)}
                  >
                    STRIPE
                  </button>
                </>
              )}
            </Link>
            {/* <Link to='paymentViaStripe'>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <button
            className='payment__button'
            onClick={() => setShowItem(true)}
          >
            PAYPAL{' '}
          </button>
        </>
      )}
    </Link> */}
            <PayPalButton
              amount='0.01'
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  'Transaction completed by ' + details.payer.name.given_name
                )

                // OPTIONAL: Call your server to save the transaction
                return fetch('/paypal-transaction-complete', {
                  method: 'post',
                  body: JSON.stringify({
                    orderID: data.orderID,
                  }),
                })
              }}
            />
            <GooglePayButton
              environment='TEST'
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '100.00',
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log('load payment data', paymentRequest)
              }}
            />
            {/* <ApplePayButton className="payment__button" onClick={onRequestApplePay} theme='light'>
      {'Subscribe with'}
    </ApplePayButton> */}
          </div>
        </div>
      ) : (
        <div className='notloggedin'>🔹You have no items to proceed.🔹</div>
      )}
    </>
  )
}

export default Payment

// import { useElements, useStripe, CardElement} from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react'
// import { Link, useHistory } from 'react-router-dom';
// import CheckoutProduct from './CheckoutProduct';
// import './Payment.css'
// import { useStateValue } from './StateProvider';
// import CurrencyFormat from 'react-currency-format';
// import { getBasketTotal } from './reducer';
// import axios from './axios';

// function Payment() {
//     const [{basket, user}, dispatch] = useStateValue();
//     const history = useHistory();
//     const stripe = useStripe();
//     const element = useElements();

//     const [succeeded, setSucceeded] = useState(false);
//     const [processing, setProcessing] = useState("");
//     const [error, setError] = useState(null);
//     const [disabled, setDisabled] = useState(true);
//     const [clientSecret, setClientSecret] = useState(true);

//     useEffect(() => {
//         //generate the special stripe secret which allows us to charge a customer
//         const getClientSecret = async() => {
//             const response = await axios({
//                 method: 'post',
//                 url:`/payment/create?total=${getBasketTotal(basket) * 100}`
//             });
//             setClientSecret(response.data.clientSecret)
//         }
//         getClientSecret();
//     }, [basket])

//     console.log('The secret is >>>', clientSecret)

//     const handleSubmit = async(Event) =>{
//         // do all fancy stripe stuff
//         Event.preventDefault();
//         setProcessing(true);

//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method:{
//                 card: element.getElement(CardElement)
//             }
//         }).then(({paymentIntent}) => {
//             //paymentIntent = payment confirmation

//             setSucceeded(true);
//             setError(null);
//             setProcessing(false);

//             history.replace('/orders')
//         })
//     }
//     const handleChange = e =>{
//         //Listen for changes in the CardElement
//         // and display
//         //setDisabled(event.empty);
//         setDisabled(Event.disabled);
//         //setError(event.error ? event.error.message: "");
//         setError(Event.error ? Event.error.message: "");
//     }

// return (
//     <div className='payment'>
//         <div className='payment__container'>
//             <h1>
//                 Checkout (<Link to ="/checkout">{basket?.length} items </Link>)
//             </h1>
//             {/* Payment section - delivery address */}
//             <div className='payment__section'>
//                 <div className='payment__title'>
//                     <h3>Delivery Address</h3>
//                 </div>
//                 <div className='payment__address'>
//                     <p>{user?.email}</p>
//                     <p>123 Vikas Nagar</p>
//                     <p>Akot, Maharastra, India</p>
//                 </div>
//             </div>

//             {/* Payment section - Review items */}
//             <div className='payment__section'>
// <div className='payment__title'>
//     <h3>Review items and delivery</h3>
// </div>
// <div className='payment__items'>
//     {basket.map(item => (
//         <CheckoutProduct
//             id={item.id}
//             title={item.title}
//             image={item.image}
//             price={item.price}
//             rating={item.rating}
//         />
//     ))}
// </div>
//             </div>

//                 {/* Payment section - Payment menthod */}
//                 <div className='payment__section'>
//                     <div className='payment__title'>
//                         <h3>Payment Method</h3>
//                     </div>
//                     <div className='payment__details'>
//                         {/* Stripe magic haha*/}
//                         <form onSubmit={handleSubmit}>
//                             <CardElement onChange={handleChange}/>
//                             <div className='payment__priceContainer'>
//                                 <CurrencyFormat
//                                     renderText={(value) => (
//                                         <h3>Order Total: {value}</h3>
//                                     )}
//                                     decimalScale={2}
//                                     value={getBasketTotal(basket)}
//                                     displayType={"text"}
//                                     thousandSeparator={true}
//                                     prefix={"₹"}
//                                 />
//                                 <button disabled={processing || disabled || succeeded}>
//                                     <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                                 </button>
//                             </div>
//                             {/* Error message */}
//                             {error && <div>{error}</div>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Payment
