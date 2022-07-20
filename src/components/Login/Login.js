import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"
import google_icon from "../../images/google-icon.png"
const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title"> Login</h3>
       <form action="">
       <div className="input-group">
          <label htmlFor="email;">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="input-group">
          <label htmlFor="password;">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <button className="login-btn">Login  </button>
       </form>
        <h4 className="new-account-title">New to Ema-john?  <Link to="signup" className="create-account-title"> Create New Account</Link></h4>
        <h5 className="or-login-option">or</h5>
        <button className="signin-with-google"> <img src={google_icon} alt=""  /> Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
