import axios from 'axios'
import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import "../home/Homepages.css"
import AllNews from './AllNews'
const NewsList = ({term}) => {
    const [articles, setArticles] = useState([])
    ///const [term, setTerm] = useState('everything')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
       const getArticles = async () =>{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${term}&from=2023-01-27&sortBy=${term}&apiKey=90e2b8da71ba4ccea76c4e4680999606`)
        console.log(response)
        setArticles(response.data.articles)
        setIsLoading(false)
       }
       getArticles()
    },[term])
  return (
    <>
    {isLoading ? (<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>) : (
    <section className='popularPost'>{
        articles.map(article => {
        return(
          <>
          <div className='article_news'>
          <AllNews title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                source={article.source.name}
                date={article.publishedAt}
                auther={article.author}/>
            <NewsItem 
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                source={article.source.name}
                date={article.publishedAt}
                auther={article.author}
            />
          </div>
            
            </>
        )
    })}
    </section>
    )}
    </>
  )
}

export default NewsList