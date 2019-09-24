import { combineReducers } from 'redux';

const INITIAL_STATE = {
	current: [],
	books: [
		'Book1',
		'Book2',
		'Book3',
		'Book4',
	]
}

const storyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type){
		default:
			return state
	}
}

export default combineReducers({
	stories: storyReducer,
});