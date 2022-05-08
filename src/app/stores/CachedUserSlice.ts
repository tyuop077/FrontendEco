import {createSlice} from "@reduxjs/toolkit";

export const cachedUserSlice = createSlice({
    name: "modal",
    initialState: {
        value: localStorage.getItem("user_cache") ?
            JSON.parse(localStorage.getItem("user_cache")!) : undefined
    },
    reducers: {
        updateCachedUser: (state) => {
            state.value = localStorage.getItem("user_cache") ?
                JSON.parse(localStorage.getItem("user_cache")!) : undefined
        }
    }
})

export const {updateCachedUser} = cachedUserSlice.actions
export default cachedUserSlice.reducer
