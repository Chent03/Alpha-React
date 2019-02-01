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
        console.log('firing')
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
        dispatch(fetchFavorites());
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

export const deleteFavorite = (id) => async dispatch => {
    try {
        let res = await axios.delete(`/api/favorites/${id}`)
        console.log(res);
        dispatch(fetchFavorites());
    } catch(er) {
        dispatch({type: ERROR_FAVORITES})
    }
}
