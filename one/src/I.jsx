import React, { createContext, useState } from 'react'
import J from './J'
export let login=createContext()
function I() {
    let [active,setActive]=useState(false)
  return (
    <div>
        <button onClick={()=>setActive(!active)}>Login</button>
      <login.Provider value={active}>
        <J/>
      </login.Provider>
    </div>
  )
}

export default I
