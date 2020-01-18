import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { deleteBook } from '../Actions';


const BookButton = (props) => {

	const book = props.book;

	const handleSubmit = () => {
		props.deleteBook(book);
		props.navigation.goBack();
	}

	return (
		<Button
			title = { props.title }
			onPress = { handleSubmit }
		/>
	);
};

export default connect (null, { deleteBook })(BookButton);
