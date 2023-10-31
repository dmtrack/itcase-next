import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ISizes, IProduct } from '../ts/interfaces';
import { getProduct, getProducts, getSizes } from '../services/api';

interface ISliceState {
    sizes: ISizes[] | null;
    products: IProduct[] | null;
    currentProduct: IProduct | null;
    loading: boolean;
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const products = await getProducts();
    return products;
});

export const fetchSizes = createAsyncThunk('fetchSizes', async () => {
    const sizes = await getSizes();
    return sizes;
});

export const fetchCurrentProduct = createAsyncThunk(
    'fetchCurrentProduct',
    async (id: number) => {
        const currentProduct = await getProduct(id);
        return currentProduct;
    }
);

const initialState: ISliceState = {
    sizes: null,
    products: null,
    currentProduct: null,
    loading: false,
};

const productSlice = createSlice({
    name: 'goods',
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
                state.currentProduct = action.payload;
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
    },
});

export default productSlice.reducer;
