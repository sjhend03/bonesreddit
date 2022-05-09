/**
 * React component holding all the reddit posts
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../RedditApi/redditApiSlice';
import {
    getPostsForX,
    isLoadingPosts,
    failedToLoadPosts,
    selectPosts
} from './postsSlice'

const Posts = () => {

    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    const handleGetPosts = () => {
        dispatch(getPostsForX());
    }

    return (
        <div className='posts'>
            Posts
            <button onClick={handleGetPosts}>posts</button>
        </div>
    )
}

export default Posts