import React, {useEffect, useState}  from 'react'
import NewsList from '../News/NewsList'
import NYTimes from '../News/NYTimes'
import SearchForm from './SearchForm'
import "./Homepages.css"
import GuardianNews from '../News/GuardianNews'
import AllNews from '../News/AllNews'
const Homepages = () => {
  const [term, setTerm] = useState('everything')
  const News = []
  return (
    <>
    
    <section className=''>
      <div className="showcase">
          <div className="overlay px-5">
          <SearchForm searchText={(text) => setTerm(text)}/>
          </div>
      </div>
    </section>
    
    <NewsList term={term}/>
    <NYTimes term={term}/>
    <GuardianNews term={term}/>
    </>
  )
}

export default Homepages