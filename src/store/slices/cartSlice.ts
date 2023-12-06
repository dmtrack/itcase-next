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
            const itemId = action.payload.id;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },
        addItem: (state, { payload }) => {
            const size = payload.size;
            const color = payload.color;
            const itemExist = state.cartItems.find(
                (item) =>
                    item.size === size &&
                    item.color === color &&
                    item.id === payload.id
            );
            if (!itemExist) {
                state.cartItems = [...state.cartItems, payload];
            }
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
