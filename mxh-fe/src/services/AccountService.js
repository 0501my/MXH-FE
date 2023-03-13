import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const AccountsRegister = createAsyncThunk (
    'accounts/accountsRegister',
    async (data) => {
        const response = await axios.post('http://localhost:4000/accounts/register',data);
        return data;
    }
)
export const AccountsLogin = createAsyncThunk (
    'accounts/accountsLogin',
    async (data) => {
        return await axios.post('http://localhost:4000/accounts/login', data);
    }
)
export const AccountsLogout = createAsyncThunk (
    'accounts/accountsLogout',
    async () => {
        return false
    }
)

export const AccountsEdit = createAsyncThunk (
    'accounts/accountsEdit',
    async (data) => {
        await axios.put(`http://localhost:4000/accounts/${data.idUser}`,data);
        const response = await axios.get('http://localhost:4000/accounts');
        return response.data
    }
)
export const changePassword = createAsyncThunk(
    'accounts/changePassword',
    async (data)=>{
        const response = await axios.post(`http://localhost:4000/accounts/changePassword/`+data[1],data[0]);
        return response.data
    }
)
export const findById = createAsyncThunk(
    'accounts/findById',
    async (data)=>{
        console.log(data)
        const res = await axios.get(`http://localhost:4000/accounts/findById/${data}`);
        return res.data
    }
)
