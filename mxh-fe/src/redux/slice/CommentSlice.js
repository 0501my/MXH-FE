import {createSlice} from "@reduxjs/toolkit";
import {deleteComment, findByIdPostComment} from "../../services/CommentService";
import {deletePost} from "../../services/PostService";
const initialState = {
    comments: []
}
const commentSlice = createSlice({
        name: 'comments',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(findByIdPostComment.fulfilled, (state, action) => {
                state.comments = action.payload;
            });
            builder.addCase(deleteComment.fulfilled, (state, action) => {
                state.comments.map((it, id) => {
                    if (it.idComment === action.payload) {
                        state.comments.splice(id, 1)
                    }
                })
            });
        }

    }
)

export default commentSlice.reducer;