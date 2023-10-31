import { getProduct, getProducts, getSizes } from '@/services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
