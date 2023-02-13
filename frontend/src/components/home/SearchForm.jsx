import React,{useState} from 'react'
import './Homepages.css'
const SearchForm = ({searchText}) => {
    const[text,setText]=useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
      searchText(text)
    } 
  return (
    <form onSubmit={handleSubmit} className=".sform">
        <input type="text" placeholder="e.g politics" 
        className="" 
        onChange={(e) => setText(e.target.value)}/>
        <button type="submit" className="bg-green-700 m-2p-2 rounded text-white">Search</button>
    </form>
  )
}

export default SearchForm