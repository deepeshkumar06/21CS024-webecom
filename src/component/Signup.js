import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const  Signup =() =>{

    return(
        <div className="body">
   <div className='login-container'>

     <form action="" className='signupform'>
        <label>Username:</label>
    <input type='text' /><br></br>
   
   <label>Password:</label>
    <input type='password' /><br></br>
  
  <label>Email:</label>
    <input type='text' /><br></br>

  <button type='submit'>Signup</button><br></br>

     </form>
<Link to="/login">Already have an account? login</Link>
   </div>
   </div>
    );
}