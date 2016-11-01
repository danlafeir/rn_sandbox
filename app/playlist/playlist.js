import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { connect } from 'react-redux'

const renderRow = (rowData) => {
  return (
    <View style={styles.row}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{rowData.title}</Text>
        <Text style={styles.artist}>{rowData.artist}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.votes}>{rowData.votes}</Text>
      </View>
    </View>
  )
}

class Playlist extends Component {
  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 2
  },
  leftContainer: {
    flex: .8,
    margin: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5
  },
  rightContainer: {
    flex: .2,
    margin: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5
  },
  title: {},
  artist: {},
  votes: {}
});

const mapStateToProps = (state) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return { dataSource: ds.cloneWithRows(state.playlist) };
}

export default connect(mapStateToProps)(Playlist)
