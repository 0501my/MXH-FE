import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk (
    'posts/getPosts',
    async () => {
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)

export const addPosts = createAsyncThunk (
    'posts/addPosts',
    async (data) => {
        await axios.post('http://localhost:4000/posts',data);
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)
