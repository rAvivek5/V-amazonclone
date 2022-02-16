import { deepOrange } from '@material-ui/core/colors'
import Dropdown from 'react-dropdown'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-dropdown/style.css'

function Footer() {
  const options = ['English', 'Marathi']
  const defaultOption = options[0]
  return (
    <div className='footer'>
      <Link to='/'>
        {' '}
        <button className='footer_back2top'>
          <h6 className='b2top'>Back to Home</h6>
        </button>
      </Link>
      <div className='bgcolor'>
        <div className='footer_main_fields'>
          <div className='footer_fields'>
            <h5 className='footer__margin'>Get to know Us</h5>
            <h6>About Us</h6>
            <h6>Careers</h6>
            <h6>Press Releases</h6>
            <h6>Amazon Cares</h6>
            <h6>Gift a Smile</h6>
          </div>
          <div>
            <h5 className='footer__margin'>Connect with Us</h5>
            <h6>Facebook</h6>
            <h6>Twitter</h6>
            <h6>Instagram</h6>
          </div>
          <div>
            <h5 className='footer__margin'>Make money with Us</h5>
            <h6>Sell on Amazon</h6>
            <h6>Sell unser Amazon Accelerator</h6>
            <h6>Amazon Global Selling</h6>
            <h6>Become an Affiliate</h6>
            <h6>Fulfilment by Amazon</h6>
            <h6>Advetise Your Products</h6>
            <h6>Amazon Pay on Merchats</h6>
          </div>
          <div>
            <h5 className='footer__margin'>Let Us Help You</h5>
            <h6> COVID-19 and Amazon</h6>
            <h6>Your Account</h6>
            <h6>Returns Centre</h6>
            <h6>100% Purchase Protection</h6>
            <h6>Amazon App Download</h6>
            <h6>Amazon Assistant Download Help</h6>
            <h6>Help</h6>
          </div>
        </div>
        <hr className='footer__margin'></hr>
        <div className='footer_main_fields_2'>
          <Link to='/'>
            <img
              className='header__logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
          </Link>
          <div className='dropdown_size'>
            <Dropdown
              className='header__dropdown'
              options={options}
              // onChange={this._onSelect}
              value={defaultOption}
              placeholder='Select an option'
            />
          </div>
        </div>
        <div className='footer_nations'>
          <h6>Australia</h6>
          <h6>Brazil</h6>
          <h6>Canada</h6>
          <h6>China</h6>
          <h6>Frace</h6>
          <h6>Germany</h6>
          <h6>Italy</h6>
          <h6>Japan</h6>
          <h6>Mexico</h6>
          <h6>Netherland</h6>
          <h6>Poland</h6>
          <h6>Singapur</h6>
          <h6>Spain</h6>
        </div>
      </div>

      <div className='bgcolor2'>
        <div className='footer_footer'>
          <div className='footer_sub'>
            <h className='footerlastheader'>AbeBooks</h>
            <p className='footerlastheader2'>
              {' '}
              Books, art <p className='footerlastheader2'>&collectibles</p>
            </p>
            <div>
              <h className='footerlastheader'>Shopbop </h>
              <p className='footerlastheader2'>
                {' '}
                Designer<p className='footerlastheader2'>Fashion Brands</p>
              </p>
            </div>
          </div>
          <div className='footer_sub'>
            <h className='footerlastheader'>Amazon Web Services</h>
            <p className='footerlastheader2'>
              {' '}
              Scalable Cloud
              <p className='footerlastheader2'>Computing Services</p>
            </p>
            <div>
              <h className='footerlastheader'>Amazon Business</h>
              <p className='footerlastheader2'>
                {' '}
                Everything For<p className='footerlastheader2'>Your Business</p>
              </p>
            </div>
          </div>
          <div className='footer_sub'>
            <h className='footerlastheader'>Audible</h>
            <p className='footerlastheader2'>
              {' '}
              Download
              <p className='footerlastheader2'>Audio Books </p>
            </p>
            <div>
              <h className='footerlastheader'> Prime Now</h>
              <p className='footerlastheader2'>
                {' '}
                2-Hour Delivery
                <p className='footerlastheader2'>on Everyday Items</p>
              </p>
            </div>
          </div>
          <div className='footer_sub'>
            <h className='footerlastheader'>DPReview</h>
            <p className='footerlastheader2'>
              {' '}
              Digital <p className='footerlastheader2'>Photography</p>
            </p>
            <div>
              <h className='footerlastheader'>Amazon Prime Music</h>
              <p className='footerlastheader2'>
                {' '}
                75 million songs, ad-free{' '}
                <p className='footerlastheader2'>
                  {' '}
                  Over 10 million podcast episodes
                </p>
              </p>
            </div>{' '}
          </div>
          <div className='footer_sub'>
            <h className='footerlastheader'> IMDb</h>
            <p className='footerlastheader2'>
              {' '}
              Movies, TV <p className='footerlastheader2'>& Celebrities</p>
            </p>
          </div>
        </div>
        <div className='footer_fffffffffffffffffffffffffffff'>
          <a className='footer_sub_l' href='www.amazon.com'>
            Conditions of Use & Sale
          </a>
          <a className='footer_sub_l' href='www.amazon.com'>
            Privacy Notice
          </a>
          <a className='footer_sub_l' href='www.amazon.com'>
            Interest-Based Ads
          </a>
          <a className='footer_sub_l' href='www.amazon.com'>
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
