import { combineReducers } from 'redux'
import { ADD_FAV, ADD_MOVIES, REMOVE_FAV, SHOW_FAV } from "../actions"

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

        default:
            return state
    }
}

const initialSearch = {
    result: {}
}
export function search(state = initialSearch, action) {
    return state;
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