import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from "./stores/ModalSlice";
import CachedUserSlice from "./stores/CachedUserSlice";

export const Store = configureStore({
    reducer: {
        modal: ModalSlice,
        cachedUser: CachedUserSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
