import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { useApp } from  '../Context/useApp';

const Teacher = () => {
  const { student, teacher, setTeacher } = useApp();
  let sir = {    
    name: 'Jane Smith',
    age: 30
};
    // setTeacher( [...teacher, sir])

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
        <div className="wrapper">
          <div className="left">
            <Sidebar />
          </div>

          <div className="middle">
            <h1>Teacher</h1>
            <div className="w-full p-4 flex flex-col items-center">
            <p className="text-gray-800">{student} !</p>
            <p className="text-gray-800">{teacher} </p>
              </div>
          </div>

          <div className="right"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Teacher;
