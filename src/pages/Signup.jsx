import React from 'react'
import signupImg from '../assets/signup.webp'
import Templeate from '../components/Templeate'

const Signup = ({setIsLoggedIn}) => {
  return (
        <Templeate
           title="Welcome Back"
           desc1="Build skills for Today ,tommorrow , and beyond"
           desc2="Education to future-proof your career"
           image={signupImg}
           formtype="signup"
           setIsLoggedIn={setIsLoggedIn}
         />
  )
}

export default Signup