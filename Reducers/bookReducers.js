import { 
	ADD_BOOK,
	REMOVE_BOOK,
	GET_BOOKS
} from '../Actions';

const initialState = {
	books: [
		'Book 1',
		'Book 2',
		'Book 3',
		'Book 4',
	]
}

export default function(state = initialState, action){
	switch (action.type){
		case ADD_BOOK:
			return {
				...state,
				books: state.books.concat(action.book)
			}

		case REMOVE_BOOK:
			return {
				...state,
				books: state.books.filter((n) => n != book)
			}

		default:
			return state
	}
}