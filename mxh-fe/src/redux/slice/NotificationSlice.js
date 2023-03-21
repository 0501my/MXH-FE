import {createSlice} from "@reduxjs/toolkit";
import {getNotifications} from "../../services/NotificationService";


const initialState = {
    notifications: []
}
const notificationSlice = createSlice({
        name: 'notifications',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getNotifications.fulfilled, (state, action) => {
                state.notifications = action.payload
            });

        }
    }
)

export default notificationSlice.reducer;
