import { Outlet, Navigate } from 'react-router-dom'
import useAuthContext from '../../context/AuthContext'
const Guest = () => {
    const {user} = useAuthContext()
  return (
    !user ? <Outlet/> : <Navigate to="/"/>
  )
}

export default Guest