import React, { createContext } from 'react'
import F from './F'
export let age=createContext()
function E() {
    
  return (
    <>
    <h2>Provider</h2>
    <age.Provider value="22">
        <F/>
    </age.Provider>
      
    </>
  )
}

export default E
