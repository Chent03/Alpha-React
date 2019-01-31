import { NAVIGATE_USER } from '../actions/types';

const initState = {
    active: 'home'
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case NAVIGATE_USER:
            return navigateUser(state, action);
        default: 
            return state;
    }
}

const navigateUser = (state, action) => {
    return {
        ...state,
        active: action.payload
    }
}

export default reducer;