import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image'
        src="https://assets3.thrillist.com/v1/image/3065406/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
        />
        <div className='home_row'>
          <Product
            id="555466"
            title="HarryPotter
                  And the order of the pheonix"
            price= "500"
            rating={4}
            image='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg'
          /> 

          <Product
            id="555467"
            title="Jujutsu Kaisen
                   Vol=1"
            price="640"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71oP9VDIKaL.jpg"
          />
          
          
        </div>
        <div className='home_row'>
          <Product
          id="555468"
          title="The Lord Of 
                 the Rings Triology"
          price="500"
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPqL_Ba5bO6361nBvAVLwXIBmPnVBpGfiyA&usqp=CAU"
          />
          <Product
           id="555469"
           title="Six of
                   Crows"
           price="1200"
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/71pX+JTU8EL.jpg"
          />
          <Product
          id="555470"
          title="Children of
                  Virtue
                And Vengance"
          price="800"
          rating={4}
          image="https://assets.teenvogue.com/photos/5e01746de53a61000896596f/2:3/w_2999,h_4499,c_limit/Book-Club_Children-of-V&V_12-10_PROMO.jpg"
          />
          </div>
        <div className='home_row'>
          <Product
           id="555471"
           title="Haikyuu
                   Karasuno vs Nekoma"
           price="860"
           rating={5}
           image="https://i.pinimg.com/originals/3d/23/db/3d23dbe4b8dec5838d4a6c22b172e6e7.jpg"
           />
        </div>
        
         
      </div>

    </div>
  )
}

export default Home