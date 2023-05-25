// {
//     type: 'ADD_MOVIES'
//     movies: ['m1', 'm2', 'm3']
// }

//actions types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const SHOW_FAV = 'SHOW_FAV'


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