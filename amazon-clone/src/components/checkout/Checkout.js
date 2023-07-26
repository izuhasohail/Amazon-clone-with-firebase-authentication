import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../../states/StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' alt='ad' src='https://pbs.twimg.com/media/EzgnjHYXsAg0a-S.png'></img>

      

      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className='checkout_title'>
          Your Shopping Basket
        </h2>

        {/*BasketItem */}
         {
          basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating}
            />
          ))
        } 
        {/* <CheckoutProduct
        id='125145'
        image='https://discountstore.pk/wp-content/uploads/2022/06/amazon-echo-smart-speaker-with-alexa-2nd-gen.jpg'
        title='This is speaker lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        price={99.90}
        rating={5}
        /> */}
      </div>
      </div>

      <div className='checkout_right'>
        <Subtotal/>
      </div>


      
    </div>
  )
}

export default Checkout
