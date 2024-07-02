import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='infoContainer'>
                    <div className='seperator imageContainer'>
                        <img src='./image/FOoterLogo.png' alt='Logo' />
                        <p>&copy; R Singhania</p>
                    </div>
                    <div className='seperator'>
                        <h3>Company</h3>
                        <p>About</p>
                        <p>FAQ</p>
                    </div>
                    <div className='seperator'>
                        <h3>Terms</h3>
                        <p>Data Privacy</p>
                        <p>Terms</p>
                        <p>Accessibility</p>
                    </div>
                    <div className='seperator'>
                        <h3>Related</h3>
                        <p>Find Buyer</p>
                        <p>Feedback</p>
                    </div>
                </div>
                <div className='socialContainer'>
                    <div className='box'>
                        <i className="fa-brands fa-linkedin-in "></i>

                    </div>
                    <div className='box'>
                        <i className="fa-brands fa-twitter "></i>

                    </div>
                    <div className='box'>
                        <i className="fa-brands fa-facebook "></i>

                    </div>
                    <div className='box'>
                        <i className="fa-brands fa-instagram fa-lg"></i>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
