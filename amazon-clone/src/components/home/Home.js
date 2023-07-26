import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './product/Product'

 function Home() {

   const[slideIndex,setSlideIndex]=useState(0);

   const images=[
      'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
      'https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg',
      'https://digitalsathi.com/wp-content/uploads/2017/08/amazon-todays-deal-banner-expand-4.jpg',
      'https://png.pngtree.com/template/20211025/ourmid/pngtree-cross-border-e-commerce-amazon-overseas-simple-fashion-backpack-travel-banner-image_661109.jpg',
      'https://d3m889aznlr23d.cloudfront.net/img/events/id/458/458120819/assets/ced0874b58981c343515de5ed30b15d8.Amazon-Future-Engineer_banner-new.jpg'

   ]

   useEffect(()=>{
      const handleSlideShow=()=>{
         setSlideIndex((prevInndex)=>(prevInndex+1)%images.length);

      }

      //start slideshow
      const interval=setInterval(handleSlideShow,2000);

      //cleanup interval when component unmounts
      return()=>clearInterval(interval);
      
   },[images]);
   
  return (
    <div className='home'>
        <div className='home_container'>
           
             <img className='home_image' src={images[slideIndex]} alt='cover'></img>

             <div className='home_row'>
                {/*Product */}
                {/*Product */}
                <Product 
                id="12321341"
                title="The lean startup"
                price={22.99}
                image='https://www.libertybooks.com/image/cache/catalog/01.zeeshan/9780670921607-640x996.jpg?q6'
                rating={3}/>

                <Product
                id="12421341"
                title="Kenwood kMix Stand Mixer for Baking,
                Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk
                ,5 litre glass Bowl"
                price={239.0}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRL7ORlJM-RqIeaRWypft3T8YMzWCbBpHU730fauQ3LsXZo2jih9H5Pc5AUxWJBNIb208&usqp=CAU'
                rating={4}
                />
             </div>

             <div className='home_row'>
                {/*Product */}
                {/*Product */}
                {/*Product */}
                <Product
                id="12421341"
                title="APPLE smart watch"
                price={750.0}
                image='https://getnow.pk/wp-content/uploads/2016/10/W08-Apple-Smart-Watch.jpg'
                rating={4}
                />
                <Product

                id="12421341"
                title="Amazon Echo (3rd generation)|Smart speaker with Alexa
                Charcol Fabric"
                price={239.0}
                image='https://discountstore.pk/wp-content/uploads/2022/06/Speaker-Echo-3.jpg'
                rating={4}
                
                />
                <Product
                id="12421341"
                title="New AApple ipad pro (12.9 inch,Wi-Fi,128 GB)"
                price={239.0}
                image='https://globalcomputers.pk/wp-content/uploads/2021/11/apple_ipad-pro-spring21_hero_04202021_big.jpg.large_.jpg'
                rating={4}
                />
                
                
             </div>

             <div className='home_row'>
                {/*Product */}
                <Product
                id="12421341"
                title="Samsung lc49rg90ssuxen 49' curved led gaming monitor"
                price={239.0}
                image='https://m.media-amazon.com/images/I/81rus0UFhsL.jpg'
                rating={4}
                />
               
             </div>
           
        </div>
    </div>
  )
}

export default Home
