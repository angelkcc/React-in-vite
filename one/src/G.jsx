import React, { createContext, useState } from 'react'
import H from './H'
export let theme=createContext()
function G() {
    let [mode,setMode]=useState(true)
  return (
    <div>
      
        <button onClick={()=>setMode(!mode)}>Theme</button>
        <theme.Provider value={mode}>
        <H/>
      </theme.Provider>
    </div>
  )
}

export default G
