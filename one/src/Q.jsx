import React, { useCallback, useState } from 'react'
import P from './P'

function Q() {
    let [add,setAdd]=useState(0)
    let[sub,setSub]=useState(10)
    let efg=useCallback(()=>{
        console.log("callback")
    },[sub])
  return (
    <div>
        <P abc={efg}/>
        {add}
        <button onClick={()=>setAdd(add+1)}>++</button>
        {sub}
        <button onClick={()=>setSub(sub-1)}>--</button>
      
    </div>
  )
}

export default Q
