import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import "../home/Homepages.css"
import AllNews from './AllNews'
const NYTimes = ({term}) => {
    const [articles, setArticles] = useState([])
    //const [term, setTerm] = useState('everything')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            try { 
                
                const response = await fetch(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=LcP0ZXhv0IvnkAzsUGwP0xxEuqCLMYHk`
        
                )
                const articles = await response.json()
                console.log(articles.response.docs)
                setArticles(articles.response.docs)
                setIsLoading(false)
            }catch (error){
                console.error(error)
            }
        }
        fetchArticles()
    },[term])
  return (
    <>
    {isLoading ? (<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>) : (
      <section className='popularPost'>
      {
        
            articles.map(article => {
            return(
                <>
                <section className='article_news'>
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
            </section>
            </>

                
            )
        })
    }      
  </section>
      
      )}
    
    </>
  )
}

export default NYTimes