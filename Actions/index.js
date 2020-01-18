export const GET_BOOKS = 'GET_BOOKS';
export const READ_BOOK = 'READ_BOOK';
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const GET_CATALOG = 'GET_CATALOG';
export const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';

export function getBooks (books){
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

export const currentBook = (book) => dispatch => {
	return dispatch({
		type: SET_CURRENT_BOOK,
		book
	})
}

export const deleteBook = (book) => dispatch => {
	// console.log("DELETEBOOK RUN");
	return dispatch({
		type: REMOVE_BOOK,
		book
	});
}

export const getCatalog = () => dispatch => {
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(res => res.json())
	.then(catalog =>
		dispatch({
			type: GET_CATALOG,
			catalog
		})
	);
}