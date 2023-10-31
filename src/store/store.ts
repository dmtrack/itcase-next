import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    products: productReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
