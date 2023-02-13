import { Outlet, Navigate } from 'react-router-dom'
import useAuthContext from '../../context/AuthContext'
import Header from '../common/header/Header'
const Auth = () => {
    const {user} = useAuthContext()
  return (
    user ? <><Header />
    <Outlet/></>  : <Navigate to="/login"/>
  )
}

export default Auth