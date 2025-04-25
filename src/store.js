import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { appReducer, todoReducer } from './reducers/index';

const reducers = combineReducers({
	app: appReducer,
	todo: todoReducer,
});

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)));
