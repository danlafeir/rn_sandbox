import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import Playlist from '../playlist/playlist';
import Search from '../search/search';

class Navigation extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.options}>
          <TouchableHighlight onPress={() => this.props.dispatch({
                  type:'@navigation/change',
                  component: Search
                })}>
            <Text style={styles.button}>
              Search
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.dispatch({
            type:'@navigation/change',
            component: Playlist
          })}>
            <Text style={styles.button}>
              Playlist
            </Text>
          </TouchableHighlight>
        </View>
        <this.props.currentComponent/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2, 
    padding: 15, 
    marginLeft: 60,
    marginRight: 60
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    margin: 6,
    padding: 2
  }
});


const mapStateToProps = (state) => {
  return { currentComponent: state.navigation.currentComponent || Playlist };
};

export default connect(mapStateToProps)(Navigation)