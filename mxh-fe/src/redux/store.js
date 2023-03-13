import {configureStore} from "@reduxjs/toolkit";

import accountSlice from "./slice/AccountSlice";
import postReducer from "./slice/PostSlice";


const Store = configureStore({
    reducer: {
        account: accountSlice,
        posts : postReducer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;





