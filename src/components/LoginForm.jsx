import React from 'react'
import {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState( {
        email:"", password:"",
    })

    const [showPassword, setShowPassword]= useState(false)

    const navigate =useNavigate(); //use to navigate to other webpage

 function changeHandler(event) {
    setFormData((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
 }

  function submitHandler(event){
   event.preventDefault();
   console.log("Submit handler triggered!"); // Debugging log
   setIsLoggedIn(true);
   toast.success("Logged In");
   console.log("Printing the formData");
   console.log(formData);
    navigate("/dashboard");
  }
     
  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">
        <label className='w-full' >
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input 
                required
                type="email"
                value ={formData.email}
                onChange={changeHandler}
                placeholder="Enter your email address"
                name="email"
                className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"
            />
        </label>

        <label className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input 
                required
                type={showPassword ? ("text"): ("password")}
                value ={formData.password}
                onChange={changeHandler}
                placeholder="Enter your Password"
                name="password"
                className=" bg-gray-900 rounded-[0.5rem] text-amber-100 w-full p-[12px]"
            />
             <span className="absolute  max-w-max -ml-10 top-[432px] cursor-pointer" 
             onClick={ ()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
             </span>

             <Link to ="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-85">
                    Forgot Pasword 
                </p>
             </Link>
        </label>
        
        <button className="bg-yellow-300 rounded-[8px] font-medium text-black py-[8px] px-[12px] mt-6" >
            Sign in
        </button>

    </form>
  )
}

export default LoginForm