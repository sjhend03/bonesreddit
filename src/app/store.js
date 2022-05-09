/**
 * Redux store for BONES Reddit
 */

import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from '../features/SearchTerm/searchTermSlice'
import postsReducer from '../features/Posts/postsSlice'

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        posts: postsReducer
    }
})