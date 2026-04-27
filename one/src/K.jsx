import React, { useReducer } from 'react'
let countReducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment': return {count:state.count +1}
        case 'decrement': return {count:state.count -1}
    }
}

function K() {
    let [state,dispatch]=useReducer(countReducer,{count:0})
  return (
    <div>
        {state.count}
        <button onClick={()=>dispatch({type:'increment'})}>++</button>
        <button onClick={()=>dispatch({type:'decrement'})}>--</button>
      
    </div>
  )
}

export default K
