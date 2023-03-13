import {configureStore} from "@reduxjs/toolkit";
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
