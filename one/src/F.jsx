import React, { useContext } from 'react'
import { age } from './E'

function F() {
    let data=useContext(age)
  return (
    <div>
        <h2>Users</h2>
        {data}
      
    </div>
  )
}

export default F
