import { configureStore } from '@reduxjs/toolkit';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        promotions: promotionsReducer
    }
});
