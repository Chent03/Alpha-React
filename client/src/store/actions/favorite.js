import axios from 'axios';

import { FETCH_FAVORITES, LOADING_FAVORITES, ERROR_FAVORITES} from './types';

export const fetchFavorites = () => async dispatch => {
    dispatch({type: LOADING_FAVORITES})
    try {
        let res = await axios.get('/api/favorites');
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }   
}

export const addFavorites = (movie) => async dispatch => {
    dispatch({type: LOADING_FAVORITES})
    try {
        console.log(movie);
        let res = await axios.post('/api/favorites', movie)
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
}

export const updateFavorite = (movie) => async dispatch => {
    try {
        let res = await axios.put('/api/favorites', movie)
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
}

export const deleteFavorite = (movie) => async dispatch => {
    try {
        let res = await axios.delete('/api/favorite', movie)
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
}
