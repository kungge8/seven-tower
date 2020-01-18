import React, { Component } from 'react';
import { Alert, Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { currentBook } from '../Actions';

import { general } from '../Styling/general.js';

class Library extends Component {
	render() {
		return (
			<View style = { styles.screen }>
				<Text style = { styles.header }>THIS IS A LIBRARY</Text>
				<ScrollView style = { styles.sectionContainer }>
					{
						this.props.books.map((book) => (
							<Button
								key = { book.title }
								title = { book.title }
								onPress = { () => {
									this.props.navigation.navigate("Story", { book: book });
									this.props.currentBook(book);
								 }}
								style = { styles.button }
							/>
						))
					}
				</ScrollView>
				<View style = { styles.footer }>
					<Button
						title = 'Remove Book'
						onPress = { () => this.props.navigation.navigate("RemoveBook") }
						style = { styles.button }
					/>
					<Button
						title = 'Shop'
						onPress = { () => this.props.navigation.navigate("Shop") }
						style = { styles.button }
					/>
				</View>
			</View>
		)		
	}
}

const mapStateToProps = (state) => ({
	books: state.book.books
}); 

export default connect(mapStateToProps, { currentBook })(Library);

const styles = StyleSheet.create(general);