import React, { useContext } from 'react'
import { theme } from './G'

function H() {
    let data=useContext(theme)
    
  return (
    <div className={data ? 'bg-black':'bg-pink-300'}>
{data} mode
      
    </div>
  )
}

export default H
