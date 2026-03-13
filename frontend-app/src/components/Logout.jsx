import React, { use } from 'react'
import { useContext } from 'react'

import App, { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'
function Logout(){
    const navigate = useNavigate();
    const {user,setUser} = useContext(AppContext);
    function handleLogout(){
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    }
    return <p>
        <button onClick={handleLogout}>Logout</button>
    </p>
}
export default Logout