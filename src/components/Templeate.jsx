import React from 'react'
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Templeate = ({title, desc1, desc2,image, formtype, setIsLoggedIn}) => {
  return (
    <div className="flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0">

       <div className="w-11/12 max-w-[450px]" >
         <h1
         className=" text-white font-semibold text-[1.875rem] leading-[2.375rem"
         >{title}</h1>

         <p className="text-[1.75rem] leading-[1.225] mt-4">
            <span className="text-white ">{desc1}</span>
            <br/>
            <span className=" text-blue-500 italic">{desc2}</span>
         </p>
          {formtype === "signup" ? 
          (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
          (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
          
          <div className="flex w-full items-center my-4 gap-x-2">
             <div className="w-full h-[1px] bg-gray-600 "></div>
             <p className=" text-gray-600 font-medium leading-[1.375rem]">
             OR
             </p>
             <div  className="w-full h-[1px] bg-gray-600 "></div>
          </div>

          <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-amber-50
           border border-gray-800 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle/>
            <p>Sign Up with Google</p>
          </button>
      </div> 

         <div className="relative w-11/12 max-w-[450px] ">
            <img src={frameImage}
             alt="Patterm"
             width={300}
             height={504}
             loading="lazy"/>

           <img src={image}
             alt="Students"
             width={300}
             height={490}
             loading="lazy"
              className="absolute -top-2.5 right-39"
             />
          </div>

    </div>
  )
}

export default Templeate