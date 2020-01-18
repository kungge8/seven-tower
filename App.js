/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Story from './Components/Story.js';
import Library from './Components/Library.js';
import AddBook from './Components/AddBook.js';
import RemoveBook from './Components/RemoveBook.js';
import Shop from './Components/Shop.js';

const MainNavigator = createStackNavigator({
  Home: { screen: Library },
  Story: { screen: Story },
  AddBook: { screen: AddBook },
  RemoveBook: { screen: RemoveBook },
  Shop: { screen: Shop }
})

let Navigation = createAppContainer(MainNavigator);

class App extends React.Component {
  render (){
    return (
      <Provider store = {store}>
        <Navigation>
          <Library />
        </Navigation>
      </Provider>
    );
  }
}

export default App;
