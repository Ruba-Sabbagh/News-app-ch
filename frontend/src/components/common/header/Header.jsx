import React, { useState,useEffect } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"
import useAuthContext from "../../../context/AuthContext"
import PreferencesIterms from "../../Preferences/Preferences"
const Header = () => {
  const [navbar, setNavbar] = useState(false)
 
  const {user,logout} =useAuthContext()
  return (
    <>
      
      <header>
        
        <div className='container paddingSmall'>
          <nav className="navbar">
            <div>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/preferences'>Preferences</Link>
              </li>
              
              </ul>
              </div>
              <div className=''>
                <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
                  {user ? <>
                    <li>
                    <Link to='/dashboard'>{user?.name}</Link>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                  </> :
                  
                  <>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                  </>}
                  
                  
                </ul>
              </div>
            
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
      <Head />
    </>
  )
}

export default Header