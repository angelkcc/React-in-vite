import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { addtocart, removefromcart } from './cartSlice'

function Use() {
    let product =[ {id: 1,title: "P1",price: 1000},{id: 2,title: "P2",price: 1000}]

    let count=useSelector((state) => state.counter.value)
    let cartList=useSelector((state,action)=>state.cart.cart)
    let dispatch=useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <br/>
        {cartList.length}
        {cartList.length>0 && <h3>Cart Items:</h3>}
        {cartList.map(a=><h4>{a.title}</h4>)}
        {product.map(a=><li key={a.id}>{a.title} 
         <button onClick={()=>dispatch(addtocart(a))}>Addtocart</button>
         <button onClick={()=>dispatch(removefromcart(a.id))}>Removefromcart</button>
         </li>)}
      
      
    </div>
  )
}

export default Use
