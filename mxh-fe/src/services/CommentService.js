import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const findByIdPostComment = createAsyncThunk(
    'comments/findByIdPostComment',
    async (data) => {
        const res = await axios.get(`http://localhost:4000/comments/findByIdPC/${data}`);
        return res.data
    }
)
export const deleteComment = createAsyncThunk(
    'comments/deleteComments',
    async (id) => {
        await axios.delete(`http://localhost:4000/comments/${id}`)
        return id;
    }
)