import { combineReducers } from 'redux';
import bookReducer from './bookReducers';
import shopReducer from './shopReducers';

export default combineReducers({
	book: bookReducer,
	shop: shopReducer
});