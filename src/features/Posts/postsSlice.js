/**
 * Redux slice including axios requests to get posts to display in the posts component
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * async thunk for getting posts
 */
export const getPostsForX = createAsyncThunk(
    'posts/getPosts',
    async () => {
        console.log('a');
        const response = await axios.get('https://www.reddit.com/r/hot.json').then(res => res).catch(err => err);
        const json = await response.json().then(res => console.log(res));
        return json;
    }
)

const initialState = {posts: [], isLoadingPosts: false, failedToLoadPosts: false};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getPostsForX.rejected] : (state) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true;
        },
        [getPostsForX.fulfilled] : (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            console.log(action.payload);
        },
        [getPostsForX.pending] : (state) => {
            state.isLoadingPosts = true;
        }
    }
})

export const isLoadingPosts = state => state.posts.isLoadingPosts; 
export const failedToLoadPosts = state => state.posts.failedToLoadPosts; 
export const selectPosts = state => state.posts.posts;
export default postsSlice.reducer;