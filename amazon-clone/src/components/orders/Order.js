import React, { useEffect, useState } from 'react'
import './Order.css'
import Header from '../header/Header'
import { useStateValue } from '../../states/StateProvider';
import { db } from '../../firebase';
import OrderCard from './OrderCard';

function Order() {
  const[orders,setOrders]=useState([]);
  const[{basket,user},dispatch]=useStateValue();

  useEffect(()=>{
    if(user){

    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created','desc')
    .onSnapshot(snapshot=>(
      setOrders(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    ))

    }

    else{

      setOrders([])

    }

    



  },[user])


  return (
    <>
    <Header/>
    <div className='orders'>
        <h1>Your Orders</h1>

        <div className='orders_order'>
          {orders.map(order=>(
            <OrderCard
            order={order}
            />
          ))}
        </div>
      
    </div>
    </>
  )
}

export default Order
