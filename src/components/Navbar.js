// src/components/Navbar.js
import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/usercontext'; // Assuming you have a UserContext
// src/components/Navbar.js
import './navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(UserContext); // Access user and logout from context

  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
        

          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
