import React from 'react'
import { useAuth } from '../context/AuthContext'

function Dashboard() {
    const {logout} = useAuth();
  return (
    <>
    <div>Dashboard</div>
    <input type='button' onClick={logout} />
    </>
  )
}

export default Dashboard