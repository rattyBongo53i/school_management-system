import React from 'react'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileInvoice, faDatabase } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/logo-bg.png';
import './styles/sidebar.css';
import { useAuth } from "../Context/useAuth";

const Sidebar = () => {

    const { logout } = useAuth();

  return (
    <div className="sidebar h-screen p-2 m-2 rounded-md" >
    <div>
     <nav className="flex w-full h-10 py-2 px-2 items-center mx-auto rounded">

        <span className="top">menu</span>

     </nav>
    
    </div>

    <div className="sidebar__header">
        <div className="sidebar__header__logo">
            <div className="navbar-collapse w-auto">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <div className="left">
                        <span className="material-symbols-outlined"> dashboard</span>
                        <Link to="/home" className="nav-link items-center">
                            <span className="material-icons-outlined 
                             cursor-pointer text-md">dashboard</span>
                        </Link>
                    </div>
                    <div className="right">
                        <span className="material-symbols-outlined"> account_circle</span>
                    </div>
                    </li>
                    <li className="nav-item ">
                        <div className="left">
                       <span className="material-symbols-outlined">school</span>
                        <Link to="/slips" className="nav-link items-center">
                            <span className="material-icons-outlined  cursor-pointer text-md">Classes</span>
                        </Link>
                        </div>
                        <div className="right"><span className="material-symbols-outlined"> account_circle</span></div>
                    </li>
                    <li className="nav-item">
                        <div className="left">
                        <span className="material-symbols-outlined">cast_for_education</span>
                        <Link to="/slips" className="nav-link items-center">
                            <span className="material-icons-outlined  cursor-pointer text-md">Subjects</span>
                        </Link>
                        </div>
                        <div className="right"><span className="material-symbols-outlined"> account_circle</span></div>
                        </li>

                    <li className="nav-item ">
                        <div className="left">
                        <span className="material-symbols-outlined">directions_walk</span>
                        <Link to="/students" className="nav-link items-center">
                            <span className="material-icons-outlined  cursor-pointer text-md"> Student</span>
                        </Link>
                        </div>
                        <div className="right"><span className="material-symbols-outlined"> account_circle</span></div>
                    </li>

                    <li className="nav-item " 
                    onClick={()=> logout()}
                    >
                        <div className="left">
                            <span className="material-symbols-outlined mat-icon" >logout</span>
                        <Link to="#"  className="nav-link items-center">
                            <span className="material-icons-outlined  cursor-pointer text-md">Logout</span>
                        </Link>
                       
                        </div>
                        <div className="right"><span className="material-symbols-outlined"> account_circle</span></div>
                    </li>

                </ul>

             </div>
            </div>
        </div>


</div>
  )
}

export default Sidebar;