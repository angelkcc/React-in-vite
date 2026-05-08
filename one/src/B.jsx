import React, { useEffect, useState } from 'react'

function B() {
    let [data,setData]=useState([])
    useEffect(()=>{
        document.title='B Comp'
    },[])
    fetch('https://fakestoreapi.com/products').then(a=>a.json()).then(b=>setData(b))
    console.log(data)
  return (
    <div>
        {data.map(a=><li key={a.id}>{a.title}</li>)}
      
    </div>
  )
}

export default B
