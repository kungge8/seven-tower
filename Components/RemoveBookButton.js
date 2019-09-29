import React from 'react';
import { Button } from 'react-native';

const bookButton = (props) => {
	console.log("Remove Book Button");

	const handleSubmit = () => {
		props.deleteBook(props.book);
		props.navigation.goBack();
	}

	return (
		<Button
			key = { props.book }
			title = { props.book }
			onPress = { handleSubmit }
		/>
	);
};

export default bookButton;