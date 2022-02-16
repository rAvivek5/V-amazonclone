import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function Header() {
  const options = ['All', 'Two', 'Three']
  const defaultOption = options[0]

  const [{ basket, user }, dispatch] = useStateValue()
  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />
        </Link>

        <div className='header__search'>
          {/* <div className='header__dropdown'>
            <Dropdown
              options={options}
              //onChange={this._onSelect}
              value={defaultOption}
              placeholder='Select an option'
            />
          </div> */}
          <input className='header__searchInput' type='text' />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'>
              <span className='header__optionLineOne'>
                Hello {!user ? 'Guest' : user.email}
              </span>
              <span className='header__optionLineTwo'>
                {' '}
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>

          <Link to='/order'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>

          <Link to='/checkout'>
            <div className='header__optionBasket'>
              <ShoppingCartCheckoutIcon />
              <span className='header__optionLineTwoheader__basketCount'>
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className='header2'>
          <div className='h2image'>
            <MenuIcon className='header2menu' />

            <a href='clonedeAmazon.com' className='header2fields'>
              All
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Best Sellers
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Kindle eBooks
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Books
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              AmazonBasics
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Health, Household & Personal Care
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Home Improvement
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Gift ideas
            </a>
            <a href='clonedeAmazon.com' className='header2fields'>
              Pet Supplies
            </a>
          </div>

          {/* <div className='h2image'>
            <a href='https://www.primevideo.com/'>
              <img
                className='d-block h-1 w-1'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Satyamevjayate2/Launch/400x39-SWM_JPN._CB649182577_.jpg'
                alt='nord'
              />
            </a>
          </div>
        </div>
        <div className='header2image'> */}
          {/* <Carousel>
            <Carousel.Item interval={10000}>
              <a href=''>
                <img
                  className='d-block h-1 w-1'
                  src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Satyamevjayate2/Launch/400x39-SWM_JPN._CB649182577_.jpg'
                  alt='nord'
                />
              </a>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <a href=''>
                <img
                  className='d-block h-1 w-1'
                  src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/gaming-swm._CB430661085_.jpg'
                  alt='nord'
                />
              </a>
            </Carousel.Item>
          </Carousel> */}
        </div>
      </div>
    </>
  )
}

export default Header
