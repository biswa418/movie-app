import { ADD_MOVIES } from "../actions"

const initialState = {
    list: [],
    fav: []
}

export default function movies(state = initialState, action) {
    if (action.type === ADD_MOVIES) {
        return {
            ...state,
            list: action.movies
        }
    }

    return state
}