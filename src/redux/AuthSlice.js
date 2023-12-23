import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user : null,
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            console.log(state.isLoggedIn);
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            console.log(state.isLoggedIn);
        },
    },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;