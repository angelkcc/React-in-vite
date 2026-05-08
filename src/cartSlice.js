import { createSlice } from "@reduxjs/toolkit";
let initialState={
    cart:[]
}
export let cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{state.cart.push(action.payload)},
        removefromcart:(state,action)=>{state.cart=state.cart.filter((item)=>item.id!==action.payload)},
    }
})
export const {addtocart,removefromcart}= cartSlice.actions
export default cartSlice.reducer