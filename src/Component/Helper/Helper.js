import React from 'react'
import './helper.css'

function Helper() {
  return (
    <div className='Helper'>
      <div className='helperTitle'>
        <div className='medium'>Let Suppliers <span className='underline'>Find You</span></div>
        <button className='helperBtn'>Get Verified</button>
      </div>
      <div className='helperContent'>
        <div className='medium bold'>How it works?</div>
        <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        <div className='helperBoxContainer'>
            <div className='helperBox'>
                <img src='./image/box1.png' alt='icon'/>
                <h4>Select Your role and Sign Up</h4>
            </div>
            <div className='helperBox'>
            <img src='./image/box2.png' alt='icon'/>

                <h4>Buyer Post Your Requirements</h4>
            </div>
            <div className='helperBox'>
            <img src='./image/box3.png' alt='icon'/>

                <h4>Review, Select and Contact the Suppliers</h4>
            </div>
            <div className='helperBox'>
            <img src='./image/box4.png' alt='icon'/>

                <h4>Supplier Complete your profile and get notified for opportunities</h4>
            </div>
            <div className='helperBox'>
            <img src='./image/box5.png' alt='icon'/>

                <h4>Contact the buyers and share your Quote for service</h4>
            </div>
            <div className='helperBox'>
            <img src='./image/box6.png' alt='icon'/>

                <h4>Both the Parties can Connect and Make Business Leave a Feedback</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Helper
