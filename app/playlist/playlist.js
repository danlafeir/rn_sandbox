import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { connect } from 'react-redux'

const renderRow = (rowData) => {
  return <Text style={styles.title}>{JSON.stringify(rowData)}</Text>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50, 
  }
});

const mapStateToProps = (state) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return { dataSource: ds.cloneWithRows(state.playlist) };
}

export default connect(mapStateToProps)(Playlist)
