import { combineReducers } from 'redux';

import navReducer from './navReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    nav: navReducer,
    imdb: movieReducer
})