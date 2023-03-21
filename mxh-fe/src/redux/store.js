import {configureStore} from "@reduxjs/toolkit";

import accountSlice from "./slice/AccountSlice";
import postReducer from "./slice/PostSlice";
import currentPostReducer from "./slice/PostSlice";
import commentReducer from "./slice/CommentSlice";
import currentCommentReducer from "./slice/CommentSlice";

const Store = configureStore({
    reducer: {
        account: accountSlice,
        posts: postReducer,
        currentPost: currentPostReducer,
        comments : commentReducer,
        currentComment : currentCommentReducer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;





