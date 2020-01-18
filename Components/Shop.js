import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import AddBookButton from './AddBookButton.js';
import { getCatalog } from '../Actions';

class Shop extends Component {
	componentDidMount() {
		this.props.getCatalog();
	}

	render() {
		return (
			<ScrollView style = { styles.sectionContainer }>
				<Text style = { styles.header }>THIS IS A SHOP</Text>
				{
					this.props.catalog.length === 0 ? (
						<Text>SHOP IS LOADING</Text>
					):(
						this.props.catalog.map((n) => {
							return (
								<AddBookButton
									key = { n.title }
									book = { n }
									navigation = { this.props.navigation }
								/>
							);
						})
					)	
				}
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => ({
	catalog: state.shop.catalog
});

export default connect(mapStateToProps, { getCatalog })(Shop);

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