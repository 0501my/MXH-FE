import {createSlice} from "@reduxjs/toolkit";
import {editPost, findByIdPost} from "../../services/PostService";

const initialState = {
    post : []
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers : {},
    extraReducers : builder => {
        builder.addCase(editPost.fulfilled,(state , {payload})=>{
            state.post = payload.data;
        })
        builder.addCase(findByIdPost.fulfilled,(state, action)=>{
            state.post = action.payload;
        });

    }
})
export default postSlice.reducer;