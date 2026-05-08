import React, { useReducer } from 'react'
import { useForm } from 'react-hook-form'

let taskReducer=(state,action)=>{
    switch(action.type){
        case 'taskadd':
            return{
                data: [...state.data,action.payload]
            }
        case 'removetask':
            return{
                data:state.data.filter(a=>a.fullname!==action.payload.fullname)
            }
    }
}

function Todotask() {
    let {register,handleSubmit,reset}=useForm();
    let [state,dispatch]=useReducer(taskReducer,{data:[]});
    let onSubmit=(formData)=>{
        dispatch({type:'taskadd',payload:formData});
        reset();
    }

  return (
    <div>
      <h2>Add task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='fullname'  {...register("fullname")}/>
        <input type="email" placeholder='email'  {...register("email")}/>
        <button type='submit'>Submit</button>
       
      </form>
      {state.data.map(a=><li>{a.fullname}{a.email}<button onClick={()=>dispatch({type:'removetask',payload: a})}>X</button></li>)}
      
    </div>
  )
}

export default Todotask
