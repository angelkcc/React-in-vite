import React, { useRef } from 'react'

function Counter() {
    let countref=useRef(0);

    let handleClick=()=>{
         console.log(countref.current);
        countref.current+=1;
       
    }
  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Counter
