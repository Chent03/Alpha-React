import {
    UPDATE_FAVORITES,
    DELETE_FAVORITE, 
    FETCH_FAVORITES, 
    POST_FAVORITES, 
    LOADING_FAVORITES,
    ERROR_FAVORITES
} from '../actions/types';

const initState = {
    loading: false,
    error: false,
    movieList: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_FAVORITES:
            return fetchFavorites(state, action);
        case POST_FAVORITES:
            return postFavorites(state, action);
        case UPDATE_FAVORITES:
            return;
        case DELETE_FAVORITE:
            return;
        case LOADING_FAVORITES: 
            return loadingFavorites(state);
        case ERROR_FAVORITES:
            return errorFavorites(state);
        default:
            return state;
    }
}

const loadingFavorites = (state) => {
    return {
        ...state,
        loading: true,
        error: false
    }
}

const errorFavorites = (state) => {
    return {
        ...state,
        loading: false,
        error: true
    }
}

const fetchFavorites = (state, action) => {
    return {
        ...state,
        loading: false,
        movieList: action.payload
    }
}

const postFavorites = (state, action) => {
    return {
        ...state,
        loading: false,
        movieList: [...state.movieList, action.payload]
    }
}

export default reducer;