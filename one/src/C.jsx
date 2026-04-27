import React, { useEffect, useState } from 'react'

function C() {
    let [data,setData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            try{
                let a=await fetch('https://fakestoreapi.com/products')
                let b= await a.json()
                setData(b)
                }
                    catch(error)
                        {
                            console.log("error fetching data",error)
                        }

                    }
                    fetchData()
    },[])
    console.log(data)
    return (
        <div>
            {data.map(a=><li key={a.id}>{a.title}</li>)}
        </div>
    )
    }

export default C
