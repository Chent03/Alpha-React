import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './store/reducers';

export default ({children, initState = {}}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(reduxThunk)));
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}