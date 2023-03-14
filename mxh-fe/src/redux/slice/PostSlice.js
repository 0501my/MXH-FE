import {createSlice} from "@reduxjs/toolkit";
import {addPosts, deletePost, editPost, findByIdPost, getPosts} from "../../services/PostService";


const initialState = {
    posts: [],
    post : {}
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
            builder.addCase(editPost.fulfilled,(state , {payload})=>{
                state.posts = payload.data;
            })
            builder.addCase(findByIdPost.fulfilled,(state, action)=>{
                state.post = action.payload;
            });
            builder.addCase(deletePost.fulfilled, (state, action) => {
                state.posts = action.payload;
            });

        }
    }
)

export default postSlice.reducer;