import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchTerm: '' };

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
        /**
         * Expects string as payload
         */
        updateSearchTerm(state, action) {
            state.searchTerm = action.payload;
            console.log(state);
        }
    }
});

export const { updateSearchTerm } = searchTermSlice.actions;
export const selectSearchTerm = state => state.searchTerm.searchTerm;
export default searchTermSlice.reducer;