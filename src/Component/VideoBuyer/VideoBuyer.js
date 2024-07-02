import React, { useState } from 'react';
import './videoBuyer.css';

function VideoBuyer() {
  const [activeTitle, setActiveTitle] = useState('Buyer');

  const handleTitleClick = (e) => {
    setActiveTitle(e.target.textContent);
  };

  return (
    <div className='VideoBuyer'>
      <div className='videoleftContainer'>
        <img src='./image/VIdeoBuyer.png' alt='Video' />
      </div>
      <div className='VideoRightContainer'>
        <span
          className={`titleOptions ${activeTitle === 'Buyer' ? 'active' : ''}`}
          onClick={handleTitleClick}
        >
          Buyer
        </span>
        <span
          className={`titleOptions ${activeTitle === 'Supplier' ? 'active' : ''}`}
          onClick={handleTitleClick}
        >
          Supplier
        </span>

        {activeTitle === 'Buyer' && (
          <ul className='buyer'>
            <li>Post Your Requirements</li>
            <li>Sit back for multiple suppliers to contact you</li>
            <li>Choose among suppliers based on ratings and reviews</li>
          </ul>
        )}
        {activeTitle === 'Supplier' && (
          <ul className='supplier'>
            <li>Post Your Services</li>
            <li>Sit back for multiple buyers to contact you</li>
            <li>Provide services to a variety of buyers</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default VideoBuyer;
