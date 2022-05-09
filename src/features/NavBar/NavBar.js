/**
 * Nav Bar component
 */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchTerm, selectSearchTerm } from '../SearchTerm/searchTermSlice'

const NavBar = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleSearchTermChange = e => {
        dispatch(updateSearchTerm(e.target.value));
    }

    return (
        <div className='nav-bar-container'>
            <img 
                src='https://picsum.photos/200/300/?blur' 
                alt='logo' 
            />
            <input 
                type='text' 
                placeholder='search'
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </div>
    )
}

export default NavBar