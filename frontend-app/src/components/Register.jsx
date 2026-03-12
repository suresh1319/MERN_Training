import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register(){
    const Navigate = useNavigate();
    const [user,setUser] = useState({});
    const API_URL = import.meta.env.VITE_API_URL
    const handleSubmit =async ()=>{
        const url = API_URL+"/auth/signup";
        const response = await axios.post(url,user);
        Navigate("/login");
    }
    return (
        <div>
            <h2>Register</h2>
            <p><input type="text" onChange={(e)=>setUser({...user,name:e.target.value})}placeholder='Enter the name'/></p>
            <p><input type="email" placeholder='Enter Email' onChange={(e)=>setUser({...user,email:e.target.value})}/></p>
           <p> <input type="password" placeholder='Enter the password' onChange={(e)=>setUser({...user,password:e.target.value})}/></p>
           <p><button onClick={handleSubmit}>Submit</button></p>
           <p><Link to="/login">Already a user Login Here</Link></p>
        </div>
    )
}
export default Register