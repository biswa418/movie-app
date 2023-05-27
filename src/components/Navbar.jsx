import React, { useState } from 'react'
import { handleMovieSearch } from '../actions'

const Navbar = (props) => {
    const [searchResText, setSearchResText] = useState('');
    const { result: movie, showSearch } = props.search;

    const handleChange = (e) => {
        setSearchResText(e.target.value)
    }

    const handleSearch = () => {
        props.dispatch(handleMovieSearch(searchResText))
    }

    return (
        <div className='nav'>
            <div className='search-container'>
                <input placeholder='search a movie' onChange={handleChange} />
                <button id='search-btn' onClick={handleSearch}>
                    Search
                </button>

                {
                    showSearch &&
                    <div className='search-results'>
                        {
                            movie.map(singMovie => {
                                return (
                                    <div key={singMovie.imdbId} className='search-result'>
                                        <img src={singMovie.Poster} alt='movie-poster' />
                                        <div className='movie-info'>
                                            <span>{singMovie.Title}
                                                <button onClick={() => handleAddtoMov(singMovie)}>
                                                    Add to movies
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar