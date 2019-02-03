import {
    UPDATE_FAVORITES,
    DELETE_FAVORITE, 
    FETCH_FAVORITES, 
    LOADING_FAVORITES,
    ERROR_FAVORITES
} from '../actions/types';

const initState = {
    loading: false,
    errorLoading: false,
    movieList: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_FAVORITES:
            return fetchFavorites(state, action);
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
        errorLoading: false
    }
}

const errorFavorites = (state) => {
    return {
        ...state,
        loading: false,
        errorLoading: true
    }
}

const fetchFavorites = (state, action) => {
    return {
        ...state,
        loading: false,
        movieList: action.payload
    }
}

export default reducer;