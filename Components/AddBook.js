import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { newBook } from '../Actions';

class AddBook extends Component {
	constructor (props){
		super(props);

		this.state = { text: '' };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange(text){
		this.setState({ text });
	}

	handleSubmit(){
		this.props.newBook(this.state.text);
		this.props.navigation.goBack();
	}

	render (){
		return (
			<View>
				<Text>THIS IS ADDBOOK</Text>
				<Text>NAME OF NEW BOOK: </Text>
				<TextInput
					style = { styles.textInput }
					placeholder = "Enter Book Title"
					value = { this.state.title }
					onChangeText = { this.handleTextChange }
				/>
				<Button
					title = "Add Book"
					onPress = { this.handleSubmit }
				/>
			</View>
		);
	}
}

export default connect( null , { newBook })(AddBook);

const styles = StyleSheet.create({
	textInput: {
		borderColor: 'gray',
		borderWidth: 1
	}
})