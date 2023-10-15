import { configureStore } from '@reduxjs/toolkit'
import Counter from './Counter'
import User from './User'

export const store=configureStore({
    reducer:{
        counter:Counter,
        users:User
    }
})