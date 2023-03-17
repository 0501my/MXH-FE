import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const editPost = createAsyncThunk(
    'posts/editPost',
    async (data) => {
         const response = await axios.put(`http://localhost:4000/posts/${data.idPost}`, data);
        console.log(response)
        return response.data[0];
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
        const response = await axios.post('http://localhost:4000/posts', data);
        return response.data[0];
    }
)
export const findByIdPost = createAsyncThunk(
    'posts/findByIdPost',
    async (data) => {
        const res = await axios.get(`http://localhost:4000/posts/findById/${data[0]}`);
        return res.data
    }
)
export const deletePost = createAsyncThunk(
    'posts/deletePosts',
    async (id)=>{
        await axios.delete(`http://localhost:4000/posts/${id}`)
        return id;
    }
)
export const findByIdAccount = createAsyncThunk(
    'posts/findByIdAccount',
    async (data) => {
        const res = await axios.get(`http://localhost:4000/posts/${data}`);
        return res.data
    }
)
