// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/navbar";
// import { motion } from "framer-motion";
// import {useApp } from  '../Context/useApp';
// import { useState } from "react";
// import '../components/styles/addStudent.css'


// const Sandbox = () => {
//   const { student, teacher, setTeacher } = useApp();
//   let sir = {    
//     name: 'Jane Smith',
//     age: 30
//     };
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         // Handle form submission (e.g., send data to a server)
//     };

//     // setTeacher( [...teacher, sir])

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, scale: 1.7 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.6,
//           delay: 0.1,
//           ease: [0, 0.71, 0.2, 1.01],
//         }}
//       >
//         <Navbar />
//         <div className="wrapper-add-student">
//           <div className="left">
//             <Sidebar />
//           </div>

//           <div className="wrapper-add-student middle">
//             <h1>Add Students</h1>
//             <div className="w-full p-4 flex flex-col items-center">
//             <form onSubmit={handleSubmit} className="add-student">
//             <div className="name">
                
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     last Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//               </div>
//           </div>

//           <div className="right"></div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Sandbox;
