import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { Provider } from 'react-redux';
import reduxStore from './redux_store';

import Search from './search/search';

export default class react_native_tutorials extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Text style={styles.title}>Sandbox</Text>
          <Search/>
        </View>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 5
  }
});
