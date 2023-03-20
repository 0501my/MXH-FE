import {configureStore} from "@reduxjs/toolkit";

import accountSlice from "./slice/AccountSlice";
import postReducer from "./slice/PostSlice";
import currentPostReducer from "./slice/PostSlice";
import friendReducer from "./slice/FriendSlice";


const Store = configureStore({
    reducer: {
        account: accountSlice,
        posts: postReducer,
        currentPost: currentPostReducer,
        friends: friendReducer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;





