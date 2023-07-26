import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/mainPage/Main';
import CheckoutPage from './pages/checkoutPage/CheckoutPage'
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './states/StateProvider';
import PaymentPage from './pages/paymentPage/PaymentPage';
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Order from './components/orders/Order'


/*STRIPE functionality */
const promise=loadStripe("pk_test_51NXqAuHSWToiLk0KkGUGEk4qOl3lOQQxqPcWKyLtKVPn99xoAnnF4W7XFP2YZtXNoI3kA6khfWc7IziizKU4tIX200DqCFhnqy")

function App() {

  const[{},dispatch]=useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(
      authUser=>{
        console.log('THE USER IS >>>',authUser);

        if(authUser){
          //the user just logged in / the user was logged in
          dispatch(
            {
              type:'SET_USER',
              user:authUser
            }
          )
        }
        else{
          //the user is logged out
          dispatch(
            {
            type:'SET_USER',
            user:null
          }
          )
        }


      }
    )


  },[])
  /* Empty array means that it will only run once when the 
  App component loads */



  //BEM convention in css
  return (
    <Router>
    <div className="app">
      
      
      <Routes>  

      <Route path='/' element={<Main/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<CheckoutPage/>} />
      <Route path='/payment' element={<Elements stripe={promise}><PaymentPage/></Elements>} />
      <Route path='/orders' element={<Order/>}/>
      <Route path="*" element={<Navigate to="/" />} />
      
      </Routes>
     

     
      
    </div>
    </Router>
  );
}

export default App;
