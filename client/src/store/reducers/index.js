import { combineReducers } from 'redux';

import navReducer from './navReducer';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    nav: navReducer,
    imdb: movieReducer,
    favoritesList: favoriteReducer
});