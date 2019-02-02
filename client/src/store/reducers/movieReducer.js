import { FETCH_MOVIE, LOADING_IMDB, ERROR_IMDB } from '../actions/types';

const initState = {
    loading: false,
    errorLoading: false,
    movie: {},
    
}

const reducer = (state = initState, action) => { 
    switch(action.type) {
        case LOADING_IMDB: 
            return loadingMovie(state);
        case ERROR_IMDB:
            return loadingError(state);
        case FETCH_MOVIE:
            return fetchMovie(state, action);
        default:
            return state;
    }
}

const loadingMovie = (state) => {
    return {
        ...state,
        loading: true,
        errorLoading: false,
    }
}

const loadingError = (state) => {
    return {
        ...state,
        loading: false,
        errorLoading: true
    }
}

const fetchMovie = (state, action) => {
    const { Title, Year, Plot, Poster, Response, ID, rating, review } = action.payload;
    return {
        ...state,
        loading: false,
        errorLoading: false,
        movie: {
            ID: ID ? ID : false,
            Title,
            Year,
            Plot,
            Poster: Poster === 'N/A' ? "http://placehold.jp/300x300.png" : Poster,
            rating,
            review,
            Response: Response === "True" ? true : false,
            errorMsg: action.payload.Error
        }
    }
}

export default reducer;