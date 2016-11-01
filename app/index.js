import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { Provider } from 'react-redux'
import reduxStore from './redux_store'

import getSongs from './playlist/services/get_songs'
import Playlist from './playlist/playlist'

export default class react_native_tutorials extends Component {
  render() {
    getSongs();
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Text style={styles.title}>Sandbox</Text>
          <Playlist/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50, 
  }
});
