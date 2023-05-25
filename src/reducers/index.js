import { ADD_FAV, ADD_MOVIES, REMOVE_FAV, SHOW_FAV } from "../actions"

const initialState = {
    list: [],
    fav: [],
    show_fav: false
}

export default function movies(state = initialState, action) {
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