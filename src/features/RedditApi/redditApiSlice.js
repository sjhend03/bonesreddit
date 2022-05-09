/**
 * Redux slice for handling reddit api auth and other functions
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getToken = createAsyncThunk(
    'redditApi/getToken',
    async () => {
        const response = await axios({
            url: 'https://www.reddit.com/api/v1/access_token',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': true
            },
            auth: {
                client_id: 'R3iCEFe9_DXWjmOsh5cQ',
                client_secret: 'KMBtT9QOt-zAXp7ZBdyfphQNOUQ3eA'
            }
        }).then(res => res).catch(err => console.log(err));
        const json = await response.json();
        return json;
    }
)

const initialState = {access_token: ''};

export const redditApiSlice = createSlice({
    name: 'redditApi',
    initialState,
    extraReducers: {
        [getToken.fulfilled] : (state, action) => {
            console.log(action.payload);
        }
    }
});

export default redditApiSlice.reducer;
export const selectRedditApi = state => state.redditApi;