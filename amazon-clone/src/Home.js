import React from 'react'
import './Home.css'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import { width } from '@mui/system'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <img className="home__image" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt="" /> */}
        <div className='fiximage' style={{ display: 'block', height: 300 }}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <a href='https://www.amazon.in/dp/B089MS7D9K/?pf_rd_r=ERD6HS4Q20V72Y44T990&pf_rd_p=796dd641-45ac-48db-b841-f55117618768&pd_rd_r=786c38bb-da73-4c68-8561-bf73727d2474&pd_rd_w=iY6an&pd_rd_wg=AiOjK&ref_=pd_gw_unk'>
                <img
                  className='d-block w-100'
                  src='https://m.media-amazon.com/images/I/51M4eJebKJL._SX3000_.jpg'
                  alt='nord'
                />
              </a>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <a href='https://www.amazon.in/b/?_encoding=UTF8&node=27060357031&pf_rd_r=8FS9TSFBVKQASSFX57E7&pf_rd_p=5ec08f28-110e-4d3c-8743-8c70f0b7dccb&pd_rd_r=c52cc694-3fc6-48bb-86e5-7ab7c5eccff5&pd_rd_w=gsDMW&pd_rd_wg=YmaBn&ref_=pd_gw_unk'>
                {' '}
                <img
                  className='d-block w-100'
                  src='https://m.media-amazon.com/images/I/61qhAkFQjDL._SX3000_.jpg'
                  alt='winter'
                />
              </a>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className='d-block w-100'
                src='https://m.media-amazon.com/images/I/71dirVX4WnL._SX3000_.jpg'
                alt='prime'
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className='d-block w-100'
                src='https://m.media-amazon.com/images/I/61TY9UUdt7L._SX3000_.jpg'
                alt='cookware'
              />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className='d-block w-100'
                src='https://m.media-amazon.com/images/I/61FzPgCT6nL._SX3000_.jpg'
                alt='note 10 S'
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='home__row'>
          <Product
            id='123'
            title='HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop (Ryzen 5-3550H/8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black/2.25 kg), 15-ec0100AX '
            price={79999}
            image='https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06440894_4.png'
            rating={4}
          />

          <Product
            id='224'
            title='Bharat Ka Sanvidhan HINDI + The Constitution of India ENGLISH (105th Amendment Combo Pack Of 2 Books ) Product Bundle – 1 January 2021'
            price={1000}
            image='https://images-na.ssl-images-amazon.com/images/I/51HArMsirdL._SY385_BO1,204,203,200_.jpg'
            rating={5}
          />

          <Product
            id='133'
            title='Collective Identities and Post-War Violence in Europe, 1944–48: Reshaping the Nation (World Histories of Crime, Culture and Violence) Hardcover – Import, 28 November 2021'
            price={300}
            image='https://images-na.ssl-images-amazon.com/images/I/41kktGQcvuL._SX329_BO1,204,203,200_.jpg'
            rating={3}
          />
        </div>

        <div className='home__row'>
          <Product
            id='163'
            title='Real Madrid Mens Home Authentic Long Sleeve Shirt 21/22 White'
            price={5555}
            image='https://cdn.shopify.com/s/files/1/0408/3397/4432/products/GR3995-RMCFMZ0042-01_240x.jpg?v=1621620215'
            rating={5}
          />

          <Product
            id='143'
            title='Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)'
            price={13999}
            image='https://images-na.ssl-images-amazon.com/images/I/71Z%2Bl05eSIS._SL1188_.jpg'
            rating={3}
          />
          <Product
            id='153'
            title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)'
            price={2000}
            image='https://images-na.ssl-images-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg'
            rating={4}
          />
          <Product
            id='163'
            title='Real Madrid Mens Home Authentic Long Sleeve Shirt 21/22 White'
            price={5555}
            image='https://cdn.shopify.com/s/files/1/0408/3397/4432/products/GR3995-RMCFMZ0042-01_240x.jpg?v=1621620215'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            id='173'
            title='LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa (Dark Meteo Titanium) (2019 Model)'
            price={124999}
            image='https://images-na.ssl-images-amazon.com/images/I/81s0JxBkzRL._SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='173'
            title='POCO X3 Pro (Graphite Black, 128 GB)  (8 GB RAM)#JustHere'
            price={20999}
            image='https://rukminim1.flixcart.com/image/416/416/kmthz0w0/mobile/j/c/p/x3-pro-mzb08ifin-poco-original-imagfn94amkm8wg3.jpeg?q=70'
            rating={4}
          />
          <Product
            id='183'
            title='Huawei Band 3 Pro Smart Band with Built-in GPS (Black)'
            price={4999}
            image='https://m.media-amazon.com/images/I/51b2DyBtUfL._SL1001_.jpg'
            rating={4}
          />
        </div>
        {/* add more */}
        <div className='home__row'>
          <Product
            id='193'
            title='Atomberg Renesa 1200 mm BLDC Motor with Remote 3 Blade Ceiling Fan  (White and Black, Pack of 1)'
            price={3396}
            image='https://m.media-amazon.com/images/I/51COVye9sqL._SL1500_.jpg'
            rating={4}
          />
          <Product
            id='203'
            title='Havells Instanio 3-Litre Instant Geyser (White/Blue)
            Color name:White Blue
            Style name:3 Litre 3kw'
            price={3594}
            image='https://m.media-amazon.com/images/I/51zfltcF4hL._SL1200_.jpg'
            rating={4}
          />
          <Product
            id='213'
            title='
            Samsung Galaxy A22 5G (Mint, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers
            Colour:Mint
            Size name:8GB
            Style name:With offer'
            price={21999}
            image='https://m.media-amazon.com/images/I/8153wY04+qS._SL1500_.jpg'
            rating={3}
          />
        </div>

        <div className='home__row'>
          <Product
            id='173'
            title='LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa (Dark Meteo Titanium) (2019 Model)'
            price={124999}
            image='https://images-na.ssl-images-amazon.com/images/I/81s0JxBkzRL._SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='223'
            title='Nerf Disruptor Elite Blaster 6-Dart Rotating Drum, Slam Fire, Includes 6 Official Elite Darts for Children, Teens, Adults - Multicolor'
            price={999}
            image='https://m.media-amazon.com/images/I/81-eDL-zIzL._SL1500_.jpg'
            rating={1}
          />
          <Product
            id='224'
            title='Medohealthy 3 Ply Disposable Cotton Face Masks ( Pack of 100, Blue) for Unisex with Nose Pin BIS, (ISI) Certified Mask with Melt Blown Layer'
            price={499}
            image='https://m.media-amazon.com/images/I/81GFab0GhkL._SX385_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
