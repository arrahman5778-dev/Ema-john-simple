import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google_icon from "../../images/google-icon.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConformPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConformPassword(event.target.value);
  };
if(user){
  navigate('/shop')
}
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confrimPassword) {
      setError("Your Two password did't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container-signup">
      <div>
        <h3 className="form-title"> Sign Up</h3>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password;">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password;">Confrim Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
            <p>{error}</p>
          </div>
          <button className="login-btn">Sign Up </button>
        </form>
        <h4 className="new-account-title">
          Already have an account?{" "}
          <Link to="/login" className="create-account-title">
            {" "}
            Login{" "}
          </Link>
        </h4>
        <h5 className="or-signup-option">or</h5>
        <button className="signin-with-google">
          {" "}
          <img src={google_icon} alt="" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SingUp;
