import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import RemoveBookButton from './RemoveBookButton.js';
import { deleteBook } from '../Actions';

class RemoveBook extends Component {
	render (){
		return (
			<View>
				<Text style = { styles.header }>THIS IS REMOVEBOOK</Text>
				<ScrollView style = { styles.sectionContainer }>
					{
						this.props.books.map((n) => {
							return (
								<RemoveBookButton 
									key = { n }
									book = { n }
									deleteBook = { deleteBook }
									navigation = {this.props.navigation}
								/>
							);
						})
					}
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.book.books
}); 

export default connect( mapStateToProps, { deleteBook } )(RemoveBook);

const styles = StyleSheet.create({
	sectionContainer: {
	    marginTop: 32,
	    marginBottom: 34,
	    paddingHorizontal: 24,
	},
	header: {
		fontSize: 24,
		fontWeight: '600',
		textAlign: 'center'
	}
});