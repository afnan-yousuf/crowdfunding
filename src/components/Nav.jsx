import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';

function Nav() {
    const {user} = useAuth();
  return (
    <nav>
        <Link to="/">Home</Link>
        {
            user ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Login</Link> 
        }
        
    </nav>
  )
}

export default Nav