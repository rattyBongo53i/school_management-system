import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import "../components/styles/addStudent.css";
import { useApp } from "../Context/useApp";
import { useState } from "react";

const AddStudent = () => {
  const { student, teacher, setTeacher } = useApp();
  let sir = {
    name: "",
    age: 0,
    grade: "",
    subjects: [],
  };

  const handleInputChange = (e) => {
    sir[e.target.name] = e.target.value;
  };

  const handleAddSubject = (e) => {
    e.preventDefault();
    sir.subjects.push(e.target.subject.value);
    e.target.subject.value = "";
  };

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
        <div className="wrapper-add-student">
          <div className="left">
            <Sidebar />
          </div>
          <div className="content">
            <div className="student-form">
                <h1>Add Student</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <hr/>
                  <div className="form-group first">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={sir.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  </form>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AddStudent;
