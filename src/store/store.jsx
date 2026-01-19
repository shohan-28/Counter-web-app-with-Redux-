import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterslice"
import postSlice from './../features/posts/postSlice';

const store = configureStore({
    reducer: {
        counters: counterReducer,
        post: postSlice,
        
    }
})
export default store;