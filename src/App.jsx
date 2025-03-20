import {Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute"



function App() {

  const [isLoggedIn, setIsLoggedIn] =useState(false); 

  return (
    <div className="w-full min-h-screen  bg-black flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
         <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}/>}/>
         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
         <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
         <Route path="/dashboard" element={
           <PrivateRoute isLoggedIn={isLoggedIn}>
             <Dashboard/>
           </PrivateRoute>

           }/>
      </Routes>
    </div>
  )
}

export default App
