export const GET_BOOKS = 'GET_BOOKS';
export const READ_BOOK = 'READ_BOOK';
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function getAllBooks (books){
	return {
		type: GET_BOOKS,
		books
	}
}

export const newBook = (book) => dispatch => {
	// console.log("ADDBOOK RUN");
	return dispatch({
		type: ADD_BOOK,
		book
	});
}

export const deleteBook = (book) => dispatch => {
	// console.log("DELETEBOOK RUN");
	return dispatch({
		type: REMOVE_BOOK,
		book
	});
}