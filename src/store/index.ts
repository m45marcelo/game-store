import { Game } from "@/types/Game";
import { configureStore } from "@reduxjs/toolkit";
import { cartStateReducer } from "./slices/cartStateSlice";


export const store = configureStore({
    reducer:{
        cartState: cartStateReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;