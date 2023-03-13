import {createSlice} from "@reduxjs/toolkit";
import {
    changePassword,
    findById,
    AccountsEdit,
    AccountsLogin,
    AccountsLogout,
    AccountsRegister
} from "../../services/AccountService";

const initialState = {
    account: [],
    accountShow: localStorage.getItem('accountShow'),
}
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(AccountsRegister.fulfilled, (state, {payload}) => {
            state.account.push(payload);
        });
        builder.addCase(findById.fulfilled, (state, action) => {
            state.account = action.payload;
        });
        builder.addCase(AccountsEdit.fulfilled, (state, action) => {
            state.account = action.payload
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.account = action.payload
        });
        builder.addCase(AccountsLogin.fulfilled, (state, {payload}) => {
            state.account = payload.data;
            localStorage.setItem("status", payload.data)
            if (state.account != 'User is not exit' && state.account != 'Password is wrong') {
                localStorage.setItem("isAccount", payload.data.idAccount)
                localStorage.setItem("access_token", payload.data.token)
                localStorage.setItem("status", payload.data)
                localStorage.setItem("nameAccount", payload.data.username)
                state.accountShow = false
                localStorage.setItem('AccountShow', state.accountShow)
            }

        });
        builder.addCase(AccountsLogout.fulfilled, (state, {payload}) => {
            state.userShow = true
            localStorage.setItem('accountShow', state.accountShow)
            localStorage.clear()
        })
    }
})
export default accountSlice.reducer;
