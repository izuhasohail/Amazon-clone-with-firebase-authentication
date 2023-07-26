import React, { useState } from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';

function Login() {
    const navigate=useNavigate();

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const SignIn=e=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        })
        .catch(error=>alert(error.message))

        //firebase login
    }

    const register= e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //successfulyy created new user with email
            //&  password
            console.log(auth); 
            if(auth){
                navigate('/')
            }
        }) 
        .catch(error=>alert(error.message))

        //firebase logic
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img  className='login_logo' alt='login'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mLbsUB7mZvSiTGi7IaQGEpHovD-tBgvafLKw7dRDeZPqKNUJSNgXPAzw3tDMQFEgOt0&usqp=CAU'></img>
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email}
                onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} 
                onChange={e=>setPassword(e.target.value)}/>

                <button className='login_signInButton' type='submit'
                onClick={SignIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to AMAZON FAKE
                CLONE Conditions of Use & Sale.Please see
                our Privacy Notice, our Cookies Notice 
                and our Interest-Based Ads Notice.

            </p>

            <button className='login_registerButton'
            onClick={register}>
                Create your Amazon Account</button>
        </div>
      
    </div>
  )
}

export default Login
