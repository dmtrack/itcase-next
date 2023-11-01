import { IOrder } from '@/ts/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface ICartSlice {
    cartItems: IOrder[];
    cartTotalQuantity: number;
    isLoading: boolean;
}

const initialState: ICartSlice = {
    cartItems: [],
    cartTotalQuantity: 0,
    isLoading: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const index = state.cartItems.findIndex(
                (item) => item.id === itemId
            );
            state.cartItems = [
                ...state.cartItems.slice(0, index),
                ...state.cartItems.slice(index + 1),
            ];
        },
        addItem: (state, { payload }) => {
            const size = payload.size;
            const itemExist = state.cartItems.find(
                (item) => item.size === size && item.id === payload.id
            );
            if (!itemExist) {
                state.cartItems = [...state.cartItems, payload];
            }
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
