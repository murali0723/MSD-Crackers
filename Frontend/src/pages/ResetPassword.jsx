 import React,{useState} from 'react'
 import "./loginSignup.css"

 const ResetPassword = () => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your authentication logic here
      console.log("Email:", email);
    };

   return (
     <div className='forgot'>
      <h1>Forgot Password</h1>
      <br/>
         <label>Email Address</label>
     <input className='ebox'
       type="email"
       placeholder="Enter your email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
     />
     <button className='resend-code'>
        Send Reset Code
     </button>
     </div>
   )
 }
 
 export default ResetPassword