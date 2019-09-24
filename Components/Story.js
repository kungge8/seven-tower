import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Story extends Component {
	render(){
		return <Text>THIS IS BOOK {this.props.navigation.getParam('book', 'default')}</Text>;
	}
}

export default Story;