import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Library extends Component {
	render() {
		return (
			<View>
				<Text>THIS IS A LIBRARY</Text>
				{
					this.props.books.map((book) => (
						<Button
							key = { book }
							title = { 'Read ' + book }
							onPress={() => this.props.navigation.navigate("Story", { book: book })}
						/>
					))
				}
			</View>
		)		
	}
}

const mapStateToProps = (state) => ({
	books: state.stories.books
}); 

export default connect(mapStateToProps)(Library);