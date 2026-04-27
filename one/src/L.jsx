import React, { useEffect, useState } from 'react'

function L() {
    //make two state variables firstname and lastname and set their initial values to empty string respectively. Then make a button which when clicket displays the fullname
    let [firstname,setFirstname]=useState('')
    let [lastname,setLastname]=useState('')
    let [data,setData]=useState([])
    useEffect(()=>{
        document.title='two'
    },[])

  return (
    <div>
       <h2>My name is {firstname} {lastname} </h2>
        <button onClick={()=>{setFirstname('Angel');setLastname('Khatri')}}>Show Full Name</button>
      
    </div>
  )
}

export default L
