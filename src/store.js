import thunk from 'redux-thunk';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';

import appReducer from './reducers/app';


const allReducers = combineReducers({
    appReducer
});

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : q => q;

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    devTools
);

const store = createStore(
    allReducers,
    allStoreEnhancers
);

export default store;