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
								key = { book.title }
								title = { book.title }
								book = { book }
								onPress = { () => this.props.navigation.navigate("Story") }
							/>
						))
					}
				</ScrollView>
				<Button
					title = 'Remove Book'
					onPress = { () => this.props.navigation.navigate("RemoveBook") }
				/>
				<Button
					title = 'Shop'
					onPress = { () => this.props.navigation.navigate("Shop") }
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