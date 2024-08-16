import React from 'react'

import { motion } from "framer-motion";
import { styled } from "styled-components";
// import { useAuth } from "../Context/useAuth";
import Navbar from "../components/navbar";
import Sidebar from '../components/Sidebar';
import '../components/styles/home.css';
import image1 from '../assets/admin-message.png';


const ProductContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  alight-items: center;
  padding: 0.7rem 1rem;
  position: relative;
  z-index: -1;
`;

const Home = () => {

  // const { currentUser } = useAuth();
  // console.log('currentUser', currentUser);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Navbar />
        <div className='wrapper bg-red-200'>
           <div className='left'><Sidebar/></div>
           <div className='middle'> 
               <div className='header'>
                 <h1>Dashboard</h1>
               </div>
            
             <div className="content">
               <div className="card-area">
                 <div className="card">
                   <div className="card-header">
                     <h3 className='font-bold'>Total Students</h3>
                   </div>
                   <div className="card-body">
                     <div className="data">
                     <span className="material-symbols-outlined"> person</span>
                       <span className='number'>10</span>
                     </div>
                   </div>
                 </div>
                 <div className="card">
                   <div className="card-header">
                     <h3 className='font-bold'>Total Employees</h3>
                   </div>
                   <div className="card-body">
                     <div className="data">
                     <span className="material-symbols-outlined"> groups</span>
                       <span className='number'>0</span>
                     </div>
                   </div>
                 </div>
                 <div className="card">
                   <div className="card-header">
                     <h3 className='font-bold'>Revenue</h3>
                   </div>
                   <div className="card-body">
                     <div className="data">
                     <span className="material-symbols-outlined"> attach_money</span>
                       <span className='number'>0</span>
                     </div>
                   </div>
                 </div>
                 <div className="card">
                   <div className="card-header">
                     <h3 className='font-bold'> Profits</h3>
                   </div>
                   <div className="card-body">
                     <div className="data">
                     <span className="material-symbols-outlined"> attach_money</span>
                       <span className='number'>0</span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="wrapper-container">
                <div className="left">
                  <div className="banner">
                  <img src={image1} alt="brand" />
                  </div>
                </div>
                <div className="right">
                  <div className="estimated-fees">
                    <div className="header"> Estimated fees this month</div>
                    <div className="number w-full mt-6 flex justify-center items-center mx-auto text-2xl">0</div>
                    <div className="footer flex justify-between w-full p-2">
                      <div className="collections">
                        <div className="value flex items-center gap-2 font-bold">₵<span className='font-bold'>0</span></div>
                        <p className='text-green-600 font-bold'><span className="material-symbols-outlined text-sm">pan_tool_alt</span>Collections</p>
                      </div>
                      <div className="remainings">
                        <div className="value flex items-center gap-2 font-bold">₵<span className='font-bold'>0</span></div>
                        <p className='text-red-600 font-bold'> <span className="material-symbols-outlined text-sm ">perm_media</span>  Remaining</p>
                      </div>
                      </div>
    
                  </div>
                </div>

                {/* time table */}
                <div className="time-table">
                  <table>
                    <thead>
                    <tr>
                    <th>Time </th>
                    <th><span className='time'>8:30 <br/>8:40</span></th>
                    <th><span className='time'>8:40 <br/>9:10</span></th>
                    <th><span className='time'>9:10 <br/>9:30</span></th>
                    <th><span className='time'>9:30 <br/>10:30</span></th>
                    <th><span className='time'>10:30 <br/>11:30</span></th>
                    <th><span className='time'>11:30 <br/>12:30</span></th>
                    <th><span className='time'>12:30 <br/>14:30</span></th>
                    <th><span className='time'>14:30 <br/>15:00</span></th>                 
                    </tr>
                    </thead>
                    <tboad>

                    <tr>
                      <td>Monday</td>
                      <td>Class 1</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                    </tr> 
                    <tr>
                    <td>Tuesday</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    </tr>
                    <tr>
                    <td>Wednesday</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    </tr>
                    <tr>
                    <td>Thursday</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    </tr>
                    <tr>
                    <td>Friday</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                      <td>John Doe</td>
                      <td>John Doe</td>
                    <td>John Doe</td>
                    </tr>
                    </tboad>
                  </table>

                </div>
               </div>
             </div>
           </div>
        </div>
    
      </motion.div>
    </>
  );
};

export default Home;
