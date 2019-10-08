import { 
	ADD_BOOK,
	REMOVE_BOOK,
	GET_BOOKS
} from '../Actions';

const initialState = {
	books: [
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
			// console.log("REDUCER CASE REMOVE_BOOK");
			return {
				...state,
				books: state.books.filter((n) => n != action.book)
			}

		default:
			return state
	}
}