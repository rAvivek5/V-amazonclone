import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './components/PaymentForm'
import StripeContainer from './components/StripeContainer'
import PaymentSuccess from './components/PaymentSuccess'
import Description from './Description'
import Footer from './Footer'
import Order from './orders/Order'
const promise = loadStripe(
  'pk_test_51JFlmgSE2C8SMsj60ACEnQi7KZy0eTGu8hre8mn85ZC3Ji67Ry0OaUbTSOzduTXPACof9mncYrEqRmFhep8nEfy300S0g1OUh5'
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className='apple'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path='/paymentViaStripe'>
            <StripeContainer />
          </Route>

          <Route path='/paymentSuccess'>
            <PaymentSuccess />
          </Route>

          <Route path='/description'>
            <Description />
          </Route>

          <Route path='/footer'>
            <Footer />
          </Route>

          <Route path='/order'>
            <Order />
        </Route>

          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

// https://www.youtube.com/watch?v=XKWJFpZYVAQ

// import { useState } from 'react';
// import './App.css';
// import spatula from './assets/spatula.jpg';
// import StripeContainer from './components/StripeContainer';

// function App() {
// 	const price = 5000;
// 	const [showItem, setShowItem] = useState(false);
// 	return (
// 		<div className='App'>
// 			<h1>The Spatula Store</h1>
// 			{showItem ? (
// 				<StripeContainer />
// 			) : (
// 				<>
// 					<h3>{price}</h3>
// 					<img src={spatula} alt='Spatula' />
// 					<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
// 				</>
// 			)}
// 		</div>
// 	);
// }

// export default App;
