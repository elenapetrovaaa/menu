import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketList: [],
        sum: 0
    },
    reducers: {
        addProduct(state, action) {
            state.basketList = [...state.basketList, action.payload]
            state.sum = state.sum + action.payload.price
        },
        removeProduct(state, action) {
            state.basketList = state.basketList.filter(card => card.idx !== action.payload.idx)
            state.sum = state.sum - action.payload.price
        }
    }
})

export const { addProduct, removeProduct } = basketSlice.actions

export default basketSlice.reducer