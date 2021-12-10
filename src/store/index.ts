import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { baseSlice } from "./baseSlice";

export const store =configureStore({
    reducer: {
        base: baseSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch = () => useDispatch<AppDispatch>()