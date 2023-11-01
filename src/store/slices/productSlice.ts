import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISizes, IProduct, IOrder } from '../../ts/interfaces';
import { fetchCurrentProduct, fetchProducts, fetchSizes } from '../actions';
import { addProduct } from '@/services/api';

interface ISliceState {
    sizes: ISizes[] | null;
    products: IProduct[] | null;
    currentProduct: IProduct | null;
    loading: boolean;
}

const initialState: ISliceState = {
    sizes: null,
    products: null,
    currentProduct: null,
    loading: false,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })

            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchCurrentProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action?.payload;
            })
            .addCase(fetchCurrentProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCurrentProduct.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchSizes.fulfilled, (state, action) => {
                state.loading = false;
                state.sizes = action.payload;
            })
            .addCase(fetchSizes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSizes.rejected, (state) => {
                state.loading = false;
            });
        // .addCase(addProduct.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.order = action.payload;
        // })

        // .addCase(addProduct.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(addProduct.rejected, (state) => {
        //     state.loading = false;
        // });
    },
});

export default productSlice.reducer;
