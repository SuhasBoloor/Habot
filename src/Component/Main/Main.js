import React from 'react'
import './main.css'

function Main() {
  return (
    <div className='Main'>
      <div className='mainContainer'>
      <div className='large bold'>Are You a Supplier?</div>
      <div className='large'>Explore Matching Oppurtunities</div>
      <form className='mainForm'>
        <label htmlFor='serviceInput'>
        <i className="fa-solid fa-suitcase fa-xl"></i>
        <input type='text' id='serviceInput' placeholder='Search for your required services here'/>
        </label>
        <label htmlFor='locationInput'>

        <i className="fa-solid fa-location-dot fa-xl"></i>
        <input type='text' id='locationInput' placeholder='Search for your desired location here'/>
        </label>
        <input className='submitBtn' type='submit'/>
      </form>
      <div className='bold inline'>Are You a Buyer? </div><a href='/buyer' className='anchorStyle'>Click here if you are loking for post requirements</a>
    </div>  
    </div>
  )
}

export default Main
