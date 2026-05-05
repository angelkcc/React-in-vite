import { createContext, useReducer } from "react";

const CartContext=createContext();
let cartReducer=(state,action)=>
{
    switch(action.type){
        case "addtocart":
            return{
                cart:[...state.cart,action.payload]
            }
    case "removefromcart":
        return {
            cart:state.cart.filter(a=>a.id!==action.payload.id)

        }
}
}
export let CartProvider=({children})=>{
    let [state,dispatch]=useReducer(cartReducer,{cart:[]})
    return(
        <>
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
export default CartContext;