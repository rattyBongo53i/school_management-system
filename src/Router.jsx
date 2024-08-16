// import React from 'react'
import { Routes, Route } from "react-router-dom";
// import { CartContextProvider } from "./Context/CartContext";
// import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Logged from "./Pages/Logged";
import Index from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import AddStudent from "./Pages/addStudent";
// import Sandbox from "./Pages/Sandbox";
import ProtectedRoutes from './ProtectedRoutes';
import { useAuth } from "./Context/useAuth";
import Students from "./Pages/Students";
import { Fragment } from "react";

const Router = () => {
  const { logout } = useAuth();

  return (
    <>

        <Fragment>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
     
          <Route path="/logout" element={logout} />


         {/* --------------------- protected routes ---------------------- */}

         <Route element={<ProtectedRoutes />}>
         <Route path="/" element={<Index />} />
         <Route path="/home" element={<Index />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-students" element={<AddStudent />} />
          <Route path="/log-in" element={<Logged />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/play" element={<Sandbox />} /> */}

         </Route>
         {/* --------------------- protected routes end here ---------------------- */}

        </Routes>
        </Fragment>

    </>
  );
};

export default Router;
