import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./post/PostSlice";
const Store = configureStore({
    reducer : {
        posts:postsReducer
    }
})
export default Store;