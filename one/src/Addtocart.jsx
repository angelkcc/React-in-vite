import React, { useContext } from 'react'
import CartContext from './CartContext'
let products=[{id:1,title:'p1',price:200},{id:2,title:'p2',price:200},{id:3,title:'p3',price:200}]

function Addtocart() {
    let {state,dispatch}=useContext(CartContext)
  return (
    <div>
        {state.cart.length}<hr/>
        {products.map(a=>(
          <>{a.title}<button onClick={()=>dispatch({type:'addtocart',payload:a})}>add to cart</button><hr/></>
        ))}
    
    </div>
  )
}

export default Addtocart
