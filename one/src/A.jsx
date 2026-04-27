import React, { useState } from 'react'

function A() {
    let [count,setCount]=useState(0)
    let [arr,setArr]=useState([1,2,3,4])
    //make object and display 
    let [obj,setObj]=useState({name:'angel',age:20,city:'Kathmandu'})
    let abc=()=>{
        setCount(count-1)
    }
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>++</button>
      <button onClick={abc}>--</button>
    {arr[0]}
    <p>{obj.name}</p>
    <p>{obj.age}</p>
    <p>{obj.city}</p>



    </div>
  )
}

export default A
