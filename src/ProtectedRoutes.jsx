import { Navigate, Outlet } from 'react-router-dom'
// import React from 'react'\
import { useAuth } from './Context/useAuth'

const ProtectedRoutes = () => {
  const {  currentUser } = useAuth()
  console.log(" privateRoute here")

  
  return (
    <>

      {currentUser ? <Outlet />  : <Navigate to="/login" />}

    </>
  )
}

export default ProtectedRoutes;