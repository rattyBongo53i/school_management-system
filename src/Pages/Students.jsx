import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import {useApp } from  '../Context/useApp';
import '../components/styles/Student.css';
import '../components/styles/table.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Students = () => {
  const { student, teacher, setTeacher } = useApp();
  const [students, setStudents] = useState([]);


  let sir = {    
    name: 'Jane Smith',
    age: 30
};
        useEffect(() => {
            try {
              const url = `${import.meta.env.VITE_App_API_URL}/students`;
              (async ()=>{
                let response = await fetch(url);
                let data = await response.json();
                setStudents(data);
              })();
              
            } catch (error) {
              console.error("Error fetching students:", error);
              
            }
        
        })
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
            <div className="top">
              <h1>Students</h1>
              <div className="add-student"> 
              <Link to="/add-students">
                <button>Add new</button>
                </Link>
                </div>
            </div>
            <div className="w-full p-4 flex flex-col items-center">
           
              </div>
              <div className="table items-center p-2 w-full mx-auto">
                <table>
                  <thead>
                <tr>
                    <th>Student No.</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>D.O.B</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id_number}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.birth_date}</td>
                    <td>{student.gender}</td>
                    <td>

                    <div className="action">
                      <button className="edit"> <span className="material-symbols-outlined">edit</span></button>
                      <button className="delete"><span className="material-symbols-outlined">delete</span> </button>
                    </div>
                    </td>
                   </tr>
                  ))}
             
                  </tbody>
                </table>
              </div>
          </div>

          <div className="right"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Students;
