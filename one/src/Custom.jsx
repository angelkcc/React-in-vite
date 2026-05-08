import React, { useEffect, useState } from 'react'

function Custom(url) {
    let[data,setData]=useState([])
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(res=>setData(res))
    },[url])
return[data]
}

export default Custom
