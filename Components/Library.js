import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class Library extends Component {
	render() {
		return (
			<View>
				<Text style = {styles.header}>THIS IS A LIBRARY</Text>
				<ScrollView style = {styles.sectionContainer}>
					{
						this.props.books.map((book) => (
							<Button
								key = { book }
								title = { book }
								onPress = {() => this.props.navigation.navigate("Story", { book: book })}
							/>
						))
					}
				</ScrollView>
				<Button
					title = 'Add Book'
					onPress = {() => this.props.navigation.navigate("AddBook")}
				/>
				<Button
					title = 'Remove Book'
					onPress = {() => this.props.navigation.navigate("RemoveBook")}
				/>
			</View>
		)		
	}
}

const mapStateToProps = (state) => ({
	books: state.book.books
}); 

export default connect(mapStateToProps)(Library);

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