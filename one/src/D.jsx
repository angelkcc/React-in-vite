import React, { useState } from 'react'

function D() {
    let [active,setActive]=useState(true)
  return (
    <div>
        <h1 className={active?'show':'hidden'}>this is demo</h1>
        <button onClick={()=>setActive(!active)} className='border'>{active? 'hide':'show'}</button>
      
    </div>
  )
}

export default D
