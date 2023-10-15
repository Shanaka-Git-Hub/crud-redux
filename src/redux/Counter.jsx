import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        incrementBypayload:(state,action)=>{
           state+=action.payload
        }
    }
})
export const {increment,decrement,incrementBypayload}=counterSlice.actions
export default counterSlice.reducer