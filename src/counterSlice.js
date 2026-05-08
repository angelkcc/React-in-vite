import { createSlice } from "@reduxjs/toolkit";
let initialState={
    value:0 //value isnt predefined here, can write anyname
}
export let counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{state.value+=1},
        decrement:(state)=>{state.value-=1},
    }
})
export const {increment,decrement}= counterSlice.actions
export default counterSlice.reducer