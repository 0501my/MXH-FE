import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./post/PostSlice";



export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})