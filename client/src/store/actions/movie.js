import { FETCH_MOVIE } from './types';
import axios from 'axios';

export const fetchMovie = (title) => async dispatch => {
    try {
        let res = await axios.get('/api/movie', {
            params: {
                t: title
            }
        })
        console.log(res);
        dispatch({
            type: FETCH_MOVIE,
            payload: res.data
        })
    } catch(e) {

    }
}