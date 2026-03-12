import React from 'react'
import { Link } from 'react-router-dom'
function Register(){
    return (
        <div>
            <h2>Register</h2>
            <p><input type="text" placeholder='Enter the name'/></p>
            <p><input type="email" placeholder='Enter Email'/></p>
           <p> <input type="password" placeholder='Enter the password' /></p>
           <p><button>Submit</button></p>
           <p><Link to="/login">Already a user Login Here</Link></p>
        </div>
    )
}
export default Register