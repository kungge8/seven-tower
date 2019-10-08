import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { newBook } from '../Actions';


const BookButton = (props) => {

	const book = props.book;

	const handleSubmit = () => {
		props.newBook(book);
		props.navigation.goBack();
	}

	return (
		<Button
			title = { book.title }
			onPress = { handleSubmit }
		/>
	);
};

export default connect (null, { newBook })(BookButton);
