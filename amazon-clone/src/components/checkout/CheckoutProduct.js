import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../states/StateProvider'
import { useState } from 'react';
function CheckoutProduct({id,image,title,price,rating,hideButton}) {

    const[{basket},dispatch]=useStateValue();
    const [removing, setRemoving] = useState(false);

    const removeFromBasket=()=>{
        setRemoving(true);

        setTimeout(() => {
            dispatch({
              type: 'REMOVE_FROM_BASKET',
              id: id,
            });
          }, 300);

    }
    const onAnimationEnd = () => {
        setRemoving(false);
      };


  return (
    <div className={`checkoutProduct ${removing?'removeAnimation':''}`} onAnimationEnd={onAnimationEnd}>
        <img src={image} className='checkoutproduct_img'></img>


        <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutproduct_rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p key={i}>🌟</p>
                ))}
                
            </div>

            {!hideButton &&(
                <button onClick={removeFromBasket}>Remove from Basket</button>

            )}
            
        </div>
      
    </div>
  )
}

export default CheckoutProduct
