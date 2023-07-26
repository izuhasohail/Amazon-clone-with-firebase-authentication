import React from 'react'
import './Product.css'
import { useStateValue } from '../../../states/StateProvider';


function Product({id,title,image,price,rating}) {/*DESTRUCTURING THE PROPS*/


    const[{basket},dispatch]=useStateValue();

   // console.log('This is the basket>>>',basket);
     const addToBasket=()=>{

        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image

            }
        })

     }
  return (
    <div className='product'>
        <div className='product_info'>

            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {
                    /*IMPORTANT */
                    Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>🌟</p>
                    ))

                }
            </div>


        </div>
        <img src={image}
        alt='product'></img>

        <button onClick={addToBasket}>Add to basket</button>



      
    </div>
  )
}

export default Product
