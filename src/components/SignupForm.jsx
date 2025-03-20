import React from 'react'
import {useState , useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link,useNavigate }  from 'react-router-dom'; 
import {toast} from 'react-hot-toast'

const SignupForm = ({setIsLoggedIn}) => {
   const navigate =useNavigate(); 

   const [formData, setFormData]= useState({
     firstName:"",
     lastName:"",
     email:"",
     password:"",
     confirmPassword:""
   })

   const [showPassword, setShowPassword]= useState(false);
   const [showConfirmPassword, setShowConfirmPassword]= useState(false);
   const [accountType, setAccountType]= useState("student");

   function changeHandler(event) {
    setFormData((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
 }

 function submitHandler(event){
   event.preventDefault();
   if(formData.password !==formData.confirmPassword){
    toast.error("password do not match");
    return;
   }

   setIsLoggedIn(true);
   toast.success("Account Created");
   const accountData ={
     ...formData
   };

   const finalData={
    ...accountData,
    accountType
   }
   console.log("printing Final account data");
   console.log(finalData);
   navigate("/dashboard")
 }

  return (
      <div>
        {/* student-Instructor tab     isko learn arna ahi*/}   
         <div
          className="flex  bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button 
            className={`${accountType === "student" ? " bg-amber-600 bg-opacity-100 text-white":
             " bg-gray-700 bg-opacity-0 text-white"} py-2 px-5 rounded-full transition-all duration-500`}
            onClick={()=> {
              console.log("Button clicked!");
              setAccountType("student")
            }}>
                Student
            </button>
            <button 
             className={`${(accountType === "instructor") ? " bg-amber-600 bg-opacity-100 text-white" :
             " bg-gray-700 bg-opacity-0 text-white "} py-2 px-5 rounded-full transition-all duration-500`}
            onClick={()=> {
              console.log("Instructor button clicked!");
              setAccountType("instructor")}}>
                Instructor
            </button>
         </div>
        
        <form onSubmit={submitHandler}>
         {/* First Name and Last Name */}
           <div className="flex justify-between mt-2">
             <label >
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                First Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"
                />
             </label>

             <label>
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                Last Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"
                />
              </label>
           </div>
            {/* Email Address */}
            <div className='w-full mt-2'>
             <label >
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                Email Address<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter your email"
                    value={formData.email}
                    className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"
                />
              </label>
            </div>
            

              {/* create Password and Confirm Password*/}
             <div className=" w-full flex justify-between mt-2">
               <label>
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                Create Password<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type={showPassword ? ("text"): ("password")}
                    name="password"
                    onChange={changeHandler}
                    placeholder="enter your password"
                    value={formData.password}  
                    className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"   
                />
                 <span  className="absolute  max-w-max -ml-10 mt-2.5 cursor-pointer"
                 onClick={ ()=> setShowPassword((prev)=> !prev)}>
                  {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) :

                   (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                  </span>
                 
                </label>

                <label>
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type={showConfirmPassword ? ("text"): ("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="confirm your password"
                    value={formData.confirmPassword}  
                    className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"   
                />
                 <span  className="absolute  max-w-max -ml-9 mt-2.5 cursor-pointer" 
                 onClick={ ()=> setShowConfirmPassword((prev)=> !prev)}>
                  {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :

                   (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                  </span>
                 
                </label>
               </div>

               <button className="bg-yellow-300 w-full rounded-[8px] font-medium text-black py-[8px] px-[12px] mt-6"> 
                 Create  Account
               </button>
        </form>

   </div>
  )
}

export default SignupForm