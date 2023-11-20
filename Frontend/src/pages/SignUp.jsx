// SignupPage.js
import React, { useState } from 'react';
import './loginSignup.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

async function Submit(e) {
    e.preventDefault();
      
    try {
    await axios.post("http://localhost:4000/user1/signup",{
        name,email,password
      })
    } catch (error) {
      console.log(error);
    }
    };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={Submit}>
      <div className="input-group">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        {/* <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div> */}
        <Link to="/login">Already have an account? Login</Link>
        <button className='submit' type="submit" onClick={Submit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
