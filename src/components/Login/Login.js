import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signin_button" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Clone Conditions of Use & Safe.
          Please see our Privacy Notice, our Cookies Notice and our
          interest-Based Ads Notice.
        </p>
        <button className="signin_register" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
