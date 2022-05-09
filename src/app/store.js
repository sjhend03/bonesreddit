/**
 * Redux store for BONES Reddit
 */

import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from '../features/SearchTerm/searchTermSlice'

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
    }
})