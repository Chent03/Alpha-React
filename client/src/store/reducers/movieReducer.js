import { FETCH_MOVIE } from '../actions/types';

const initState = {
    movie: {},
    
}

const reducer = (state = initState, action) => { 
    switch(action.type) {
        case FETCH_MOVIE:
            return fetchMovie(state, action);
        default:
            return state;
    }
}

const fetchMovie = (state, action) => {
    const { Title, Year, Plot, Poster, Response } = action.payload;
    return {
        ...state,
        movie: {
            Title,
            Year,
            Plot,
            Poster,
            Response: Response === "True" ? true : false,
            errorMsg: action.payload.Error
        }
    }
}

export default reducer;