import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './movieReducer';

const reducerList = combineReducers({
    movies: movieReducer,
});

let store = createStore(reducerList, applyMiddleware(thunk));

export default store;