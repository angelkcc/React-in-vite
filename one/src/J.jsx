import React, { useContext } from 'react'
import { login } from './I'

function J() {
    let data=useContext(login)
  return (
    <div>
        {data? 'logout':'login'}
      {data} 
    </div>
  )
}

export default J
