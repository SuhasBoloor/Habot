import React, { useState } from 'react';
import './LoginSignin.css';

function LoginSignin({ handleClose }) {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignIn) {
      alert("Congratulation!! You have Signed in")
    } else {
      alert("You have Logged in. Welcome!!")
    }
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="LoginPage">
      <div className="LoginPageContent">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <form className='userForm' onSubmit={handleSubmit}>
          <h2>{isSignIn ? 'Sign Up' : 'Login'}</h2>
          {isSignIn && (
            <input className='inputstyles' type='text' id='username' placeholder='Enter username' required />
          )}
          <input  className='inputstyles' type='email' id='userEmail'  placeholder={isSignIn ? 'Enter email' : 'Enter registered email'} required />
          <input className='inputstyles' type='password' id='userPassword'  placeholder='Enter your password' required  />
          <button className='submitBtn' type='submit'>{isSignIn ? 'Sign Up' : 'Login'}</button>
          <p>
            {isSignIn ? (
              <>Already have an account? <span className="toggle-link" onClick={toggleForm}>Login</span></>
            ) : (
              <>Don't have an account? <span className="toggle-link" onClick={toggleForm}>Sign Up</span></>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginSignin;
