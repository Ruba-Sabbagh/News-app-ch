import React,{useState} from 'react'

const AllNews = ({title,description,url,urlToImage,source,date,auther}) => {
    const News = []

  return (
    News.push({
        ntitle: title,
        ndescription:description,
        nurl:url,
        nurlToImage:urlToImage,
        nsource:source,
        ndate:date,
        nauther:auther
    })
    
  )
  
}

export default AllNews