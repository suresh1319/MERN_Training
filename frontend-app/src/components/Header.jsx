import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

function Header(){
    const {user} = useContext(AppContext);
    return <div className="header">
        <h2>Header</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/orders'>Orders</Link></li>
            {user?.email?(
                <li><Link to='/logout'>Logout</Link></li>
            ):(
            <li><Link to='/login'>Login</Link></li>
)}
        </ul>
    </div>
}
export default Header