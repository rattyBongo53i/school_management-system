import { Navigate, Outlet } from 'react-router-dom'
// import React from 'react'\
import { useAuth } from './Context/useAuth'

const ProtectedRoutes = () => {
  const { auth } = useAuth()


  
  return (
    <>

      {auth ? <Outlet />  : <Navigate to="/login" />}

    </>
  )
}

export default ProtectedRoutes;