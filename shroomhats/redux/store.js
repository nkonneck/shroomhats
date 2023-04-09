import { configureStore } from '@reduxjs/toolkit';
import { promotionsReducer } from '../features/promotions/hatsSlice';

export const store = configureStore({
    reducer: {
        promotions: promotionsReducer
    }
});
