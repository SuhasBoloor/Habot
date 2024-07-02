import React, { useState } from 'react'
import './navbar.css'
import Login from '../LoginSignin/LoginSignin';
import Main from '../Main/Main';
import Info from '../Info/Info';

function NavBar() {
  const [showLogin, setshowLogin] = useState(false);

  const handleLogin= () => setshowLogin(true)
  const handleClose= () => setshowLogin(false)

  return (
    <>
    <div className='NavBar'>
      <img src='./Image/HabotLogo.png' alt='Logo'/>
      <div className='navContainer'>
        <span>Find Suppliers</span>
        <span>Find Service Tags <i className="fa-solid fa-angle-down"></i></span>
        <button className='navBtn' onClick={handleLogin}>Login / Sign Up</button>
        {showLogin && <Login handleClose={handleClose}/>}
      </div>
    </div>
      <Main/>
      <Info handleLogin={handleLogin}/>
    </>
  )
}

export default NavBar
