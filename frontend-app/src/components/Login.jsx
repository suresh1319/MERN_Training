import React from 'react';
import {Link} from 'react-router-dom';

function Login(){
    return <div>
        <h2>Login</h2>
        <p><input type="text" placeholder='username'/></p>
        <p><input type="password" placeholder='password'/></p>
       <p><button>Login</button></p> 
        <Link to='/register'>New User? Register here</Link>
    </div>
}
export default Login