import { Alert } from 'react-native'

import { 
	ADD_BOOK,
	REMOVE_BOOK,
	GET_BOOKS,
	SET_CURRENT_BOOK
} from '../Actions';

const initialState = {
	books: [],
	currentBook: {}
}

export default function(state = initialState, action){
	switch (action.type){
		case SET_CURRENT_BOOK:
			return {
				...state,
				currentBook: action.book
			}
		case ADD_BOOK:
			//Check for existing book, if present return state
			//if not present, return state + new book.
			if (state.books.filter((n) => n.title === action.book.title).length > 0){
				Alert.alert("You already have that book!");
				return state;
			} 
			return {
				...state,
				books: state.books.concat(action.book)
			}	

		case REMOVE_BOOK:
			return {
				...state,
				books: state.books.filter((n) => n != action.book)
			}

		default:
			return state
	}
}