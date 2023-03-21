import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getNotifications = createAsyncThunk(
    'notifications/getNotifications',
    async (data) => {
        const response = await axios.get(`http://localhost:4000/notifications/${data}`);
        return response.data;
    }
)

export const addNotification = createAsyncThunk(
    'notifications/addNotification',
    async (data) => {
        const response = await axios.post(`http://localhost:4000/notifications`,data);
        return response.data;
    }
)
