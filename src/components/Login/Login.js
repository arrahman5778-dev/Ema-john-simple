import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import google_icon from "../../images/google-icon.png";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handaleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handalePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate("/shop");
  }
  const handleLoginUser = (event) => {
    event.pereventDefault();

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="form-title"> Login</h3>
        <form action="" onSubmit={handleLoginUser}>
          <div className="input-group">
            <label htmlFor="email;">Email</label>
            <input
              onBlur={handaleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password;">Password</label>
            <input
              onBlur={handalePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          <button className="login-btn">Login </button>
        </form>
        <h4 className="new-account-title">
          New to Ema-john?{" "}
          <Link to="/signup" className="create-account-title">
            {" "}
            Create New Account
          </Link>
        </h4>
        <h5 className="or-login-option">or</h5>
        <button className="signin-with-google">
          {" "}
          <img src={google_icon} alt="" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
