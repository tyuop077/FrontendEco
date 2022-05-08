import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReactElement} from "react";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: null as null | ReactElement
    },
    reducers: {
        openModal: (state, action: PayloadAction<ReactElement>) => {
            state.value = action.payload;
            document.body.style.overflow = "hidden"
        },
        closeModal: (state) => {
            state.value = null;
            document.body.style.overflow = "unset"
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer
