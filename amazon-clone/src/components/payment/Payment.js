import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from '../../states/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements, useStripe,CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer/reducer';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
function Payment() {

    const [{basket,user},dispatch]=useStateValue();
    const navigate=useNavigate();

    

    const stripe=useStripe();
    const elements=useElements();

    const[succeeded,setSucceeded]=useState(false);
    const[processing,setProcessing]=useState("");
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const[clientSecret,setClientSecret]=useState(true);



    useEffect(()=>{
        /*generate the special stripe secret which allows us to 
        charge a customer */

        const getClientSecret=async()=>{
            const response= await axios({
                method:'post',
                //stripe accepts the total in a currency's(for $ -> cent e.g 10$ -> 10000 cents) subunits
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);

        }
        getClientSecret();

    },[basket])

    console.log('The secret is >>>>>',clientSecret)
    console.log('Person',)

    const handleSubmit=async(event)=>{
        //stripe handling functionality

        event.preventDefault();
        setProcessing(true);

        const payload= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            /**paymentIntent=payment Confirmation*/
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set(
                {
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            }
            )

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            /*whenever we r finidhed with the 
            payment, just empty the basket */

            dispatch({
                type:'EMPTY_BASKET'
            })

            navigate('/orders',{
                replace:true
            })

            
        })


    }

    const handleChange=event=>{
        /*Listen for the changes in the CardElement
        and display any errors as the customer types
        their card details */

        setDisabled(event.empty);
        setError(event.error?event.error.message:"");

    }


  return (
    <div className='payment'>
        <div className='payment_container'>

            <h1 >
                Checkout {
                    <Link to='/checkout'>{basket?.length} items</Link>
                }
            </h1>
            {/*Payment Section-delivery address */}

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>

                </div>

                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>


            {/*Payment Section-Review Items */}

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        image={item.image}
                        />

                    ))}
                </div>
            </div>



            {/*Payment Section-Payment Method */}

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>

                </div>
            
            <div className='payment_details'>

                {/*STRIPE functionality */}

                <form onSubmit={handleSubmit}>
                    <CardElement
                    onChange={handleChange}
                    />
                    <div className='payment_priceContainer'>
                        <CurrencyFormat
                        renderText={(value)=>(
                            <>
                            <h3>Order Total:{value}</h3>
                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}

                        />
                        <button disabled={processing || disabled ||
                        succeeded}>
                            <span>{processing?<p>Processing</p>:'Buy now'}</span>

                        </button>

                    </div>

                    {/*ERROR */}
                    {error && <div>{error}</div>}
                </form>

            </div>

           </div>
        </div>
      
    </div>
  )
}

export default Payment
