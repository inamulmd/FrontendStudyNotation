import React from 'react'
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

import { toast } from 'react-hot-toast';

const Navbar = (props) => {
 let isLoggedIn =props.isLoggedIn;
 let setIsLoggedIn =props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
       <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
       </Link>

       <nav>
          <ul className=" text-white flex  gap-x-3 ">
             <li>
                <Link to="/">Home</Link>
             </li>
             <li>
                <Link to="/">About</Link>
             </li>
             <li>
                <Link to="/">Contact</Link>
             </li>
          </ul>
       </nav>

       {/* Login -Signup-Logout - Dashboard */}
       <div className="flex items-center gap-x-4  ">
          {!isLoggedIn &&
            <Link to="/login">
               <button className=" bg-black text-white py-[8px] px-[12px]
                rounded-[18px] border border-r-indigo-950">
                  Login
               </button>
            </Link>
          }
          {!isLoggedIn &&
            <Link to="/signup">
               <button  className=" bg-black text-white py-[8px] px-[12px]
                rounded-[18px] border border-r-indigo-950"  >
                  Sign Up
               </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/">
               <button  className=" bg-black text-white py-[8px] px-[12px]
                rounded-[18px] border border-r-indigo-950"
               onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out Successfully");
               }}>
                  Log Out
               </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/dashboard">
               <button  className=" bg-black text-white py-[8px] px-[12px]
                rounded-[8px] border border-r-indigo-950">
                  Dashboard
               </button>
            </Link>
          }
       </div>

    </div>
  )
}

export default Navbar