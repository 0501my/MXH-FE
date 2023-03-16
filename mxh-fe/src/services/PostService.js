import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const editPost = createAsyncThunk(
    'posts/editPost',
    async (data) => {
        await axios.put(`http://localhost:4000/posts/${data.idPost}`, data);
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)

export const addPosts = createAsyncThunk(
    'posts/addPosts',
    async (data) => {
        await axios.post('http://localhost:4000/posts', data);
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)
export const findByIdPost = createAsyncThunk(
    'posts/findByIdPost',
    async (data) => {
        const res = await axios.get(`http://localhost:4000/posts/findById/${data}`);
        return res.data
    }
)
export const deletePost = createAsyncThunk(
    'posts/deletePosts',
    async (id)=>{
        await axios.delete(`http://localhost:4000/posts/${id}`)
        const res = await axios.get('http://localhost:4000/posts')
        return res.data;
    }
)
export const findByIdAccount = createAsyncThunk(
    'posts/findByIdAccount',
    async (data) => {
        const res = await axios.get(`http://localhost:4000/posts/${data}`);
        return res.data
    }
)
