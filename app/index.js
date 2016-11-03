import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import reduxStore from './redux/redux_store';

import weJ from './weJ/weJ';
import Camera from './camera/camera';


export default class react_native_tutorials extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Text style={styles.title}>Sandbox</Text>
          <weJ/>
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
    marginTop: 30,
    marginBottom: 5
  }
});
