import React, { Component } from 'react'
import { addFav, removeFav } from '../actions';

export class MovieCard extends Component {

    handleFavourite = () => {
        const { movie, dispatch } = this.props;
        dispatch(addFav(movie));
    }

    handleUnFavourite = () => {
        const { movie, dispatch } = this.props;
        dispatch(removeFav(movie))
    }

    render() {
        const { movie, isFav } = this.props;

        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movie-poster' src={movie.Poster} />
                </div>

                <div className='right'>
                    <div className='title'>
                        {movie.Title}
                    </div>

                    <div className='plot'>
                        {movie.Plot}
                    </div>

                    <div className='footer'>
                        <div className='rating'>
                            {movie.imdbRating}
                        </div>

                        {
                            isFav
                                ?
                                <button className='unfavourite-btn' onClick={this.handleUnFavourite}>
                                    Unfavorite
                                </button>
                                :
                                <button className='favourite-btn' onClick={this.handleFavourite}>
                                    Favorite
                                </button>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard