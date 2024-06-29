import { createReducer, createSlice } from "@reduxjs/toolkit"
import { registerUser } from "../action/auth"
import { get_access_token, set_access_token } from "../../utility/misc"

const initialState = {
    loading: false,
    status: null,
    logged: false,
    error: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLog: (state) => {
            return{
                ...state
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.fulfilled, (state, action) => {

            set_access_token(action.payload)
            return{
            ...state,
            error: false,
            token: action.payload
        }})
        .addCase(registerUser.pending, (state, action) => {
            return{
            ...state,
            token: action.payload
        }})
        .addCase(registerUser.rejected, (state, action) => {
            return{
            ...state,
            error: true
        }})
    }
})