import React from 'react'
import Header from "./components/common/header/Header"
import "./App.css"
import { Link, Route,Routes } from "react-router-dom"
import Homepages from './components/home/Homepages'
import Login from './components/common/header/Login'
import Register from './components/common/header/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Auth from './components/layout/auth'
import Guest from './components/layout/guest'
import ForgotPassword from './components/common/header/ForgotPassword'
import ResetPassword from './components/common/header/ResetPassword' 
import Dashboard from './components/common/header/dashboard'
import Preferences from './components/Preferences/Preferences'

function  App  ()  {
    
  return (
     <>
     
     <div>
      <Routes>
        <Route element={<Auth/>}>
            <Route path='/' element={<Homepages/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/preferences' element={<Preferences/>} />
            
        </Route>

        <Route element={<Guest/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>} />
            <Route path='/password-reset/:token' element={<ResetPassword/>} />
        </Route>  
          
      </Routes>
      </div>
      </>
  )
}
export default App