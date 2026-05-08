import React, { useEffect, useState } from 'react'

function Scroll() {
    let [scroll,setScroll]=useState(false)
    useEffect(()=>{
        let handleScroll=()=>{
            if(scrollY>100)
            {
                setScroll(true)

            }
            else{
                setScroll(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
    },[])
  return (
    <div>
      <h1 className={scroll?'text-amber-800 fixed':'text-violet-700'} >demo</h1>
    </div>
  )
}

export default Scroll
