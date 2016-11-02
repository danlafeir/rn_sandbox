'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class CameraImpl extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          captureAudio={false}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight 
            style={{margin:50}} 
            underlayColor={'#f8f8ff'}
            onPress={this.takePicture.bind(this)}>
            <View style={styles.capture}></View>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#1f8a70ff',
    borderRadius: 60/2,
    height: 60,
    width: 60,
    marginBottom: 50
  }
});

export default CameraImpl