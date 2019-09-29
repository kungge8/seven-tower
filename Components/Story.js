import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Story extends Component {
	render(){
		return (
			<View>
				<Text>THIS IS BOOK {this.props.navigation.getParam('book', 'default')}</Text>
			</View>
		)
	}
}

export default Story;