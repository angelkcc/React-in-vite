import React, { useRef } from 'react'

function Inputfocus() {
    let inputRef=useRef(null)
    
    let handleClick=()=>
    {
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='fullname' />
      <button onClick={handleClick}>Submit</button>
      
    </div>
  )
}

export default Inputfocus
