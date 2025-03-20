import React from 'react'
import Templeate from '../components/Templeate'
import loginImg from "../assets/login.webp"

const Login = ({setIsLoggedIn}) => {
  return (
    <Templeate
      title="Welcome Back"
      desc1="Build skills for Today ,tommorrow , and beyond"
      desc2="Education to future-proof your career"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login