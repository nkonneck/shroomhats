import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HATS } from '../../shared/hats';

export const fetchHats = createAsyncThunk(
    'hats/fetchHats',
    async () => {
        return HATS;
        
    }
);

const hatsSlice = createSlice({
    name: 'promotions',
    initialState: { isLoading: true, errMess: null, hatsArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPromotions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPromotions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.promotionsArray = action.payload;
            })
            .addCase(fetchPromotions.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const promotionsReducer = hatsSlice.reducer;
