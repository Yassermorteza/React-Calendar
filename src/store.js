import thunk from 'redux-thunk';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';


const allReducers = combineReducers({
    venues: [{ a: 2 }]
});

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : q => q;

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    devTools
);

const store = createStore(
    () => [{ a: 2 }],
    allStoreEnhancers
);

export default store;