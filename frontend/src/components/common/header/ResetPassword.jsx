import React,{useState,useEffect} from 'react'
import useAuthContext from '../../../context/AuthContext'
import axios from '../../../api/axios'
import { useParams, useSearchParams } from 'react-router-dom'
const ResetPassword = () => {
    const [email,setEmail] = useState("")
    const [errors,setError] = useState([])
    const [status,setStatus] = useState(null)
    const [password,setPassword] = useState("")
    const [password_confirmation ,setPasswordconf] = useState("")
    const [serchParam] = useSearchParams()
    const {token} = useParams()
    const {csrf} = useAuthContext()
    useEffect (()=>{
        setEmail(serchParam.get("email"));
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault();
        await csrf();
        setError([])
        setStatus(null)
        try{
            const response = await  axios.post('/reset-password', {email,token,password,password_confirmation})
            setStatus(response.data.status)    
        } catch(e){
            if(e.response.status == 422){
              setError(e.response.data.errors)
            }
            console.error(e.response.data);
        }

    }
  return (
    <>
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
        {status && <div className='form-group bg-green-700 m-2p-2 rounded text-white'>{status}</div>}
     
          <h3 className="Auth-form-title">Reset Password</h3>
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
            <button type="submit" className="btn btn-primary ">
              Reset
            </button>
          </div>
          
        </div>
      </form>
    </div>
    </>
  )
}

export default ResetPassword