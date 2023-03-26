import {createSlice} from "@reduxjs/toolkit";
import {
    addPosts,
    deletePost,
    editPost,
    findByContent,
    findByIdAccount,
    findByIdPost,
    getPosts,
    getStatus,
    likePost,
    unlikePost
} from "../../services/PostService";


const initialState = {
    posts: [], currentPost: {account: {}}

}
const postSlice = createSlice({
    name: 'posts', initialState, reducers: {}, extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        });

        builder.addCase(getStatus.fulfilled, (state, action) => {
            state.posts = action.payload
        });

        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.posts.unshift(action.payload)
        })
        builder.addCase(editPost.fulfilled, (state, action) => {
            state.posts.map((it, id) => {
                if (it.idPost === action.payload.idPost) {
                    state.posts[id] = action.payload
                }
            })
        })
        builder.addCase(findByIdPost.fulfilled, (state, action) => {
            state.currentPost = action.payload;
        });

        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.posts.map((it, id) => {
                if (it.idPost === action.payload) {
                    state.posts.splice(id, 1)
                }
            })
        });
        builder.addCase(findByIdAccount.fulfilled, (state, action) => {
            state.posts = action.payload;
        });

        builder.addCase(findByContent.fulfilled, (state, action) => {
            state.posts = action.payload
        });
        builder.addCase(unlikePost.fulfilled, (state, action) => {
            state.posts.map((it, id) => {
                if (it.idPost === action.payload.idPost) {
                    state.posts[id].isLike = 1;
                }
            })
        });
        builder.addCase(likePost.fulfilled, (state, action) => {
            state.posts.map((it, id) => {
                if (it.idPost === action.payload.idPost) {
                    state.posts[id].isLike = 2;
                }
            })
        });
    }
})

export default postSlice.reducer;
