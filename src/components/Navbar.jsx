import React from 'react'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='search-container'>
                <input placeholder='search a movie' />
                <button id='search-btn'>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Navbar