import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../Context/Authcontext'

const Private = () => {
  const {currentUser} =useAuthContext()
  return (
    <>
      {currentUser?<Outlet/>:<Navigate to='/'/>}
    </>
  )
}

export default Private
