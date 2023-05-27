// {
//     type: 'ADD_MOVIES'
//     movies: ['m1', 'm2', 'm3']
// }

//actions types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const SHOW_FAV = 'SHOW_FAV';
export const ADD_TO_SEARCH_RES = 'ADD_TO_SEARCH_RES';


//action reducer
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFav(movie) {
    return {
        type: ADD_FAV,
        movie
    }
}

export function removeFav(movie) {
    return {
        type: REMOVE_FAV,
        movie
    }
}

export function showFav(value) {
    return {
        type: SHOW_FAV,
        value
    }
}

export function handleMovieSearch(movie) {
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&s=${movie}`

    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movies => {
                dispatch(addMovieSearch(movies.Search))
            })
    }
}

export function addMovieSearch(moviesList) {
    return {
        type: ADD_TO_SEARCH_RES,
        moviesList
    }
}