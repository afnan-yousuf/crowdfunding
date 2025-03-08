import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';

function Login() {
    const {login} = useAuth();
    const [uname, setuname] = useState(null);
    const [upass, setupass] = useState(null);
    const handleuname = (event) =>{
        setuname(event.target.value);
    }

    const handleupass = (event) =>{
        setupass(event.target.value);
    }

    const handlesubmit = (event) =>{
        event.preventDefault();
        login(uname,upass);
    }
  return (
    <div>
        <h1>Login</h1>
    <form onSubmit={handlesubmit}>
    Username: <input type='text' value={uname} onChange={handleuname} />
    Password: <input type='password' value={upass} onChange={handleupass} />
    <input type='submit' value="Login"/>
    </form>
    </div>
  )
}

export default Login