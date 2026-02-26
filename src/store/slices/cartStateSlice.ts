import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface cartState{
    displayCart: "flex" | "hidden"
}

const initialState: cartState = {
    displayCart: "hidden"
}

export const cartStateSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: {
        changeStateCart(state, action: PayloadAction<"flex" | "hidden">){
            state.displayCart = action.payload
        }
    }
})

export const { changeStateCart } = cartStateSlice.actions
export const cartStateReducer = cartStateSlice.reducer