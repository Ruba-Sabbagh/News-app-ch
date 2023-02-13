import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import useAuthContext from '../../../context/AuthContext'
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {login,errors} = useAuthContext()
    const handleLogin = async(event) => {
        event.preventDefault(); 
        login({email,password}) 
    };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
            {errors.email &&
            <div className='flex'>
              <span className='text-red-400'>{errors.email[0]}</span>
            </div>
            }
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange= {(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
            {errors.password &&
            <div className='flex'>
              <span className='text-red-400'>{errors.password[0]}</span>
            </div>
            }
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary bg-green-700">
              Login
            </button>
          </div>
          <Link to="/forgot-password" className="forgot-password text-right mt-2">
            Forgot password?
          </Link>
          <Link to="/register" className=" text-right mt-20">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login