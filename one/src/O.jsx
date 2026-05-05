import React, { useMemo, useState } from 'react'

function O() {
    let [add,setAdd]=useState(0)
    let [sub,setSub]=useState(10)
    let multiplication=useMemo(function abc()
{
    console.log("multi")
    return add*10
},[])
  return (
    <div>
        {multiplication}
        {add}
        <button onClick={()=>setAdd(add+1)}>++</button>
        {sub}
        <button onClick={()=>setSub(sub-11)}>--</button>
      
    </div>
  )
}

export default O
