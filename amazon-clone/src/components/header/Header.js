import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../states/StateProvider';
import { auth } from '../../firebase';
function Header() {

    const[{basket,user},dispatch]=useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }

    }


  return (
    <div className='header'>
        <Link to='/'>
        <img className='header-logo' 
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'></img>
        </Link>

        
        <div className='header_search'>
            <input type='text' className='header_searchInput'></input>
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header_nav'>
            <Link to={!user && '/login'}> 
            {/* On if there's no user then redirect to login page*/ }
            <div onClick={handleAuthentication} className='header_option'>
                <span className='header_OptionLineOne'>
                    Hello {!user?' Guest': user.email}
                </span>
                <span className='header_OptionLineTwo'>
                   {user?'Sign Out':'Sign In'}
                </span>

            </div>
            </Link>


            <Link to='/orders'>

            <div className='header_option'>
                
            <span className='header_OptionLineOne'>
                    Returns
                </span>
                <span className='header_OptionLineTwo'>
                    & Orders
                </span>

            </div>
            </Link>

            <div className='header_option'>

            <span className='header_OptionLineOne'>
                    Your
                </span>
                <span className='header_OptionLineTwo'>
                    Prime
                </span>

            </div>

            <Link to='/checkout'>
            <div className='header_basketOption'>
                <ShoppingBasketIcon/>
                <span className='header_OptionLineTwo header_BasketCount'>{basket?.length}</span>
            </div>
            </Link>

            


        </div>
        
      
    </div>
  )
}

export default Header
