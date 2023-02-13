import { useEffect, useState } from 'react';
import useAuthContext from "../../../context/AuthContext"

const Dashboard = ()=> {
  const {user,getUser} = useAuthContext()
  
    return(
        <>
        <section className='flex'>
        <div>
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            <h4>Name</h4>
                <p>{user.name}</p>
                <h4>Email</h4>
                <p>{user.email}</p>
        </div>
        </section>
        </>
        
    )
}
export default Dashboard