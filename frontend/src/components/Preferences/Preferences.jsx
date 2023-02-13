import React, {Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../api/axios'
const Preferences = () => {
    const [preferences,setPreferences]=useState([])
    const [loading,setLoding]=useState(true)
    useEffect( () =>{
      const fetchArticles = async () => {
        const res = await axios.get('/api/preferences')
        if(res.data.status===200){
          
          setPreferences(res.data.message)
        }
        
        setLoding(false)
      
    }
    fetchArticles()
    },[preferences])
    var html_pref=""
    if(loading){
      return <h4>loding...</h4>
    }else{
      html_pref=preferences.map((item)=>{
        return(
          <>
          <tr key={item.p_id}>
            <th scope="row">{item.p_id}</th>
            <td>{item.name}</td>
            <td>{item.type}</td>
          </tr>
          </>
          
        )
      })
    }
    
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    {html_pref}
  </tbody>
</table>
    </>
    
  )

}

export default Preferences