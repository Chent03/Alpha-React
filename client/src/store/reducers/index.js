import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    imdb: movieReducer,
    favoritesList: favoriteReducer
});