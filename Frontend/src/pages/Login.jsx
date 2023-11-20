// LoginPage.js
import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import "./loginSignup.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function Submit(e) {
    e.preventDefault();
  
    try {
    await axios.post("http://localhost:4000/",{
      email,password
    })
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={Submit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <Link to="/resetpassword">Forgot Password?</Link>
        </div>
        <Link to="/signup">Don't have an account? Sign Up</Link>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
