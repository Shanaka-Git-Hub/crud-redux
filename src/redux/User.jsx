import {createSlice, current} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'users',
    initialState:{
        user:[]
    },
    reducers:{
        saveUser:(state,action)=>{
           state.user.push(action.payload)
        },
        deleteUser:(state,action)=>{
           if(confirm('Are You Suer ?...')){
            state.user=state.user.filter(e=> e.id != action.payload)
           } 
        },
        updateUser:(state,action)=>{
           let temp=state.user.find(e=> e.id==action.payload.id);
           if(temp){
            temp.id=action.payload.id;
            temp.name=action.payload.name;
            temp.age=action.payload.age;
           }
        }
    }
})
export const {saveUser,deleteUser,updateUser}=userSlice.actions
export default userSlice.reducer