import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
	reducer,
	initialState,
	applyMiddleware(...middleWare)
);

export default store;