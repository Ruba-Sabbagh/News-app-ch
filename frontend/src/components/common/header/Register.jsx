import React, { useState } from 'react'
import { Link }from 'react-router-dom'
import "./Login.css"
import useAuthContext from '../../../context/AuthContext'

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password_confirmation ,setPasswordconf] = useState("")
    const {register,errors} = useAuthContext()
    const handleRegister = async (event) => {
        event.preventDefault();
        register({name,email,password,password_confirmation })
    }
    return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
          <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mt-1"
              placeholder="First Name"
            />
            {errors.name &&
            <div className='flex'>
              <span className='text-red-400'>{errors.name[0]}</span>
            </div>
            }
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
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="confirm password"
              value={password_confirmation }
              onChange= {(e) => setPasswordconf(e.target.value)}
              
              className="form-control mt-1"
              placeholder="Enter confirm password"
            />
            {errors.password_confirmation  &&
            <div className='flex'>
              <span className='text-red-400'>{errors.password_confirmation [0]}</span>
            </div>
            }
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary bg-green-700">
              Register
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default Register