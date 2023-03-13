import {createSlice} from "@reduxjs/toolkit";
import {addPosts, getPosts} from "../../services/PostService";


const initialState = {
    posts: [],
}
const postSlice = createSlice({
        name: 'posts',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            });
            builder.addCase(addPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            });

        }
    }
)

export default postSlice.reducer;