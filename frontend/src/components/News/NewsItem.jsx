import React from 'react'
import './NewsItem.css'
import "bootstrap/dist/css/bootstrap.min.css"
const NewsItem = ({title,description,url,urlToImage,source,date,auther}) => {
  return (
    <section className='popularPost'>
        <div className="box">
        <div className="items">
        <article key={url}  className="article">
            <img className="img" src={urlToImage} alt={urlToImage}/>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
            <h3>{source}</h3>
            <h3>{auther}</h3>
            <h3>{date}</h3>
        </article>
        </div>

    </div>
    </section>
    
  )
}

export default NewsItem