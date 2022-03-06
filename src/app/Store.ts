import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from "./stores/ModalSlice";

export const Store = configureStore({
    reducer: {
        modal: ModalSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
