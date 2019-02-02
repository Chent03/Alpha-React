import { FETCH_MOVIE, LOADING_IMDB, ERROR_IMDB } from './types';
import axios from 'axios';

export const fetchMovie = (title) => async dispatch => {
    dispatch({type: LOADING_IMDB })
    try {
        let res = await axios.get('/api/movie', {
            params: {
                t: title
            }
        })
        dispatch({ type: FETCH_MOVIE, payload: res.data })
    } catch(e) {
        console.log(e);
        dispatch({type: ERROR_IMDB })
    }
}