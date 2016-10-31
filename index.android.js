/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './app/index.js'

export default class react_native_tutorials extends Component {
  render() {
    return (
        <App/>
    );
  }
}

AppRegistry.registerComponent('react_native_tutorials', () => react_native_tutorials);
