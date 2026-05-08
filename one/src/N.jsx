import React, { useEffect, useState } from 'react'

function N() {
    //take a data and fetch it from api using useEffect and print name in ul and li and again fetch data from another api in the same component and print the title and image in div
    let [data,setData]=useState([])
    let [data2,setData2]=useState([])
    useEffect(()=>{
        fetch('https://bankingkhabar.com/wp-json/wp/v2/categories').then(a=>a.json()).then(res=>setData(res))
    },[])
    useEffect(()=>{
        fetch('https://bankingkhabar.com/wp-json/wp/v2/posts').then(a=>a.json()).then(res=>setData2(res))
    },[])

  return (
    <div>
        <ul>
            {data.map((item)=><li key={item.id}>{item.name}</li>)}
        </ul>
        <div>
            {data2.map((item)=><div key={item.id}>
                <h2>{item.title.rendered}</h2>
                <img src={item.featured_image_src} alt={item.title.rendered}/>
            </div>)}
        </div>
      
    </div>
  )
}

export default N
