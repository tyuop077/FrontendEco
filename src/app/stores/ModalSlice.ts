/*import {createReducer} from "@reduxjs/toolkit";

const modalReducer = createReducer({

}, {
    asd:
})*/

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReactElement} from "react";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: null as null | ReactElement
    },
    reducers: {
        openModal: (state, action: PayloadAction<ReactElement>) => {
            state.value = action.payload
        },
        closeModal: (state) => {
            state.value = null
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer
