import axios from 'axios';

import { 
    POST_FAVORITES,
    FETCH_FAVORITES, 
    LOADING_FAVORITES, 
    ERROR_FAVORITES
} from './types';

export const fetchFavorites = () => async dispatch => {
    dispatch({type: LOADING_FAVORITES})
    try {
        let res = await axios.get('/api/favorites');
        dispatch({type: FETCH_FAVORITES, payload: res.data})
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }   
}

export const addFavorites = (movie) => async dispatch => {
    dispatch({type: LOADING_FAVORITES})
    try {
        await axios.post('/api/favorites', movie)
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
    dispatch(fetchFavorites());
}

export const updateFavorite = (id, rating, review) => async dispatch => {
    try {
        await axios.patch(`/api/favorites/${id}`, {rating: rating, review: review})
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
    dispatch(fetchFavorites());
}

export const deleteFavorite = (id) => async dispatch => {
    try {
        await axios.delete(`/api/favorites/${id}`)
        dispatch(fetchFavorites());
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
}
