import React, { useReducer } from 'react'
let productData=[{id:1,title:'P1',price:200},{id:2,title:'P2',price:200},{id:3,title:'P3',price:200}]
let cartReducer=(state,action)=>{
    switch(action.type)
    {
        case 'addtocart':
            return{ 
                cart: [...state.cart,action.payload]
            }
        case 'removefromcart':
            return{
                cart:state.cart.filter(a=>a.id!==action.payload.id)
            }
        
    }

}
function Addtocart() {
    let [state,dispatch]=useReducer(cartReducer,{cart:[]})
  return (

    <div>
       <h2>Product List</h2>
       {productData.map(a=><li key={a.id}>{a.title}
        <button onClick={()=>dispatch({type:'addtocart',payload:a})}>Add to Cart</button>
       </li>)}
       <h2>Cart List {state.cart.length}</h2>
       {state.cart.map(a=><li key={a.id}>{a.title}<button onClick={()=>dispatch({type:'removefromcart',payload: a})}>X</button></li>)}
    </div>
  )
}

export default Addtocart
