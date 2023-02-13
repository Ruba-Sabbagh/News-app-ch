import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import "../home/Homepages.css"
import axios from 'axios'
import AllNews from './AllNews'
const GuardianNews = ({term}) => {
    const [articles, setArticles] = useState([])
    //const [term, setTerm] = useState('everything')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            try { 
                const getArticles = async () =>{
                    const response = await axios.get(`https://api.goperigon.com/v1/all?apiKey=6201a342-cffe-4854-ac14-914ca5534d9f&q=${term}&showReprints=false&from=2022-01-01&to=2022-01-31`
                    )
                    console.log(response)
                    setArticles(response.data.articles)
                    setIsLoading(false)
                }
                getArticles()
            }catch (error){
                console.error(error)
            }
        }
        fetchArticles()
    },[term])
  return (
    <>
    {isLoading ? (<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>) : (
      <section className='popularPost'>{
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
    })}
    </section>
      
      )}
    
    </>
  )
}

export default GuardianNews