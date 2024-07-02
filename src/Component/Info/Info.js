import React from 'react'
import './info.css'

function Info({handleLogin}) {
  const  list=[ "Abu Dhabi", "Dubai", "Sharja & Ajman", "Fujairah", "Ras AL Khaimah", "Umm Al Quwain" ]
  return (
    <div className='Info'>
        <div className='leftContainer'>
            <div className='medium bold'>Ready to dive into <span className='blue'>HABOT?</span></div>
            <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='loginBtn2' onClick={handleLogin}>Sign Up Today!  <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
        <div className='rightContainer'>
            {list.map((item, index)=>{
                return <div key={index} className='cityContainer'>{item}</div>
            })}
            
        </div>
    </div>
  )
}

export default Info
