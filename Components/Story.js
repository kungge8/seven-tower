import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import RemoveBookButton from './RemoveBookButton.js';

import { general } from '../Styling/general.js';

class Story extends Component {
	render(){
		return (
			<View style = { styles.screen }>
				<Text>THIS IS BOOK { this.props.currentBook.title }</Text>
				
				<ScrollView style = { styles.sectionContainer }>
					<Text>{ this.props.currentBook.body }</Text>
				</ScrollView>
				<View style = { styles.footer }>
					<RemoveBookButton
						title = { "REMOVE BOOK" }
						book = { this.props.currentBook }
						navigation = { this.props.navigation }
					/>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	currentBook: state.book.currentBook
})	

export default connect(mapStateToProps)(Story);

const styles = StyleSheet.create(general);