// {
//     type: 'ADD_MOVIES'
//     movies: ['m1', 'm2', 'm3']
// }

//actions types
export const ADD_MOVIES = 'ADD_MOVIES';


//action reducer
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}