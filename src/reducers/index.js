import { combineReducers } from 'redux'
import { ADD_FAV, ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_TO_SEARCH_RES, REMOVE_FAV, SHOW_FAV } from "../actions"

const initialState = {
    list: [],
    fav: [],
    show_fav: false
}

export function movies(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_FAV:
            return {
                ...state,
                fav: [action.movie, ...state.fav]
            }

        case REMOVE_FAV:
            const removedArr = state.fav.filter((mov) => {
                return mov.Title !== action.movie.Title
            })

            return {
                ...state,
                fav: removedArr
            }

        case SHOW_FAV:
            return ({
                ...state,
                show_fav: action.value
            })

        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list],
                showSearch: false
            }

        default:
            return state
    }
}

const initialSearch = {
    result: {},
    showSearch: false
}
export function search(state = initialSearch, action) {
    switch (action.type) {
        case ADD_TO_SEARCH_RES:
            return {
                ...state,
                result: action.moviesList,
                showSearch: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearch: false
            }

        default:
            return state
    }
}

// const initialRoot = {
//     movies: initialState,
//     search: initialSearch
// }
// export default function rootReducer(state = initialRoot, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

//takes in an object --> key: reducers
//combineReducers({ add: addReducer, subtract: subtractReducer })
export default combineReducers({
    movies,
    search
})