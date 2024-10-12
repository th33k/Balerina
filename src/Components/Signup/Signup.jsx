import React from 'react';
import './SignUp.css'; // Import CSS
import cleaner from '../../images/cleaner-illustration.png'; // Import image

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="form-section">
        <h2>Get Started Now</h2>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the <a href="#">terms & policy</a></label>
          </div>

          <button type="submit" className="signup-button">Signup</button>
        </form>

        <div className="social-signup">
          <button className="google-signup">Sign in with Google</button>
          <button className="apple-signup">Sign in with Apple</button>
        </div>

        <p>Have an account? <a href="#">Sign In</a></p>
      </div>

      <div className="image-section">
        <img src={cleaner} alt="Cleaner" />
      </div>
    </div>
  );
};

export default SignUp;
