import React, { useEffect } from 'react'

function M() {
    //make component where alert loads before the component is loaded
    useEffect(()=>{
        alert('Component M is loaded')
    },[])

  return (
    <div>
      
    </div>
  )
}

export default M
