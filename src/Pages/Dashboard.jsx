import React from 'react'
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import "../components/styles/dashboard.css";
import Sidebar from '../components/Sidebar';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
import { useEffect } from 'react';


const Dashboard = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    console.log("system outside Dashboard")
    
    // useEffect(() => {
    // console.log(" inside Dashboard")

    // if (!currentUser) {
    //     navigate("/login");
    //     }
 
    // });
    // console.log("tokens: ");
    // console.log(token);

  return (
    <>
        <motion.div
        initial={{ opacity: 0, scale: 1.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
            <Navbar />
            <div className="main-dashboard">

            <div className='.left'>
                <Sidebar />
            </div>

            <div>
                <div className="dashboard">
                    <h1>Dashboard</h1>
                    <p>Welcome to your dashboard</p>
                    <div className="flex w-full p-2">
                        <div className=" w-full flex-end p-2">
                            {currentUser.name}
                        </div>
                    </div>

                </div>
            </div>


            </div>


        </motion.div>
    
    </>
  )
}

export default Dashboard