import React,{useState,useEffect} from 'react'
import useAuthContext from '../../../context/AuthContext'
import axios from '../../../api/axios'
const ForgotPassword = () => {
    const [email,setEmail] = useState("")
    const [errors,setError] = useState([])
    const [status,setStatus] = useState(null)
    const {csrf} = useAuthContext()
    const handleSubmit = async (event) => {
        event.preventDefault();
        await csrf();
        setError([])
        setStatus(null)
        try{
            const response = await  axios.post('/forgot-password', {email})
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
     
          <h3 className="Auth-form-title">Forgot Password</h3>
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
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div> 
          </div>
         
          
      </form>
    </div>
    </>
    
  )
}

export default ForgotPassword