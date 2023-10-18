import React from 'react'
import { Link } from 'react-router-dom' //its is for logo link
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


const Header = () => {
    const [{basket,user}]=useStateValue();
    const userName = user? user.email.substring(0, user.email.indexOf('@')) : 'Guest';
    const login =()=>{
        if(user){
            auth.signOut()
        }
    }
  return <nav className='header'>
    {/**Logo */}
    <Link to="/"> <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> </Link>
    
    {/**search bar */}
    <div className='header__search'>
    <input className='header__searchInput' type="text" />
    <SearchIcon className='header__searchIcon'/>
    </div>

    
    {/**few links */}
    <div className='header__nav'>
    {/**1st link */}
    {/**link will not refresh the page but h1 tag does */}
    <Link to={!user && "/login"} className='header__link'> 
    <div onClick={login} className="header__option">
        <span className='header__optionLineOne'>Hello {userName}</span>
        <span className='header__optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
    </div>
    </Link>
    {/**2nd link */}
    <Link to="/" className='header__link'> 
    <div className="header__option">
        <span className='header__optionLineOne'>Returns</span>
        <span  className='header__optionLineTwo'>& Orders</span>
    </div>
    </Link>
    {/**3rd link */}
    <Link to="/login" className='header__link'> 
    <div className="header__option">
        <span className='header__optionLineOne'>Your</span>
        <span  className='header__optionLineTwo'>Prime</span>
    </div>
    </Link>
    {/**4th link */}
    <Link to="/checkout" className='header__link'>
    <div className="header__optionBasket">
        {/**Shopping basket icon */}
        <ShoppingCartOutlinedIcon/>
        {/**Nnmber of item in basket */}
        <span className='header__optionLineTwo header__besketCount'>{basket?.length}</span>
    </div>
    </Link>
    
    </div>



    {/**add to cart with funtion(number) */}


  </nav>
  
}

export default Header