import {configureStore} from "@reduxjs/toolkit";
<<<<<<< HEAD
import accountSlice from "./slice/AccountSlice";


const Store = configureStore({
    reducer: {
        account: accountSlice,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;
=======
import postsReducer from "./post/PostSlice";



export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})
>>>>>>> origin/master
