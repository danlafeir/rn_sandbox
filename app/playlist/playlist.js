import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

class Playlist extends Component {
  render() {
    const renderRow = (rowData, sectionID, rowID) => {
      return (
        <View style={styles.row}>
          <View style={styles.leftContainer}>
            <Text>{rowData.title}</Text>
            <Text>{rowData.artist}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text>{rowData.votes}</Text>
            <TouchableHighlight onPress={() => this.props.dispatch({
                      type: '@playlist/upvote', 
                      index: rowID 
                    })}>
              <Text style={styles.upVote}>
                    ^upvote
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }

    return (
      <ListView
        style={{margin:10}}
        dataSource={this.props.dataSource}
        renderRow={renderRow}
      />
    );
  }
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 3
  },
  leftContainer: {
    flex: .65,
    margin: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 15
  },
  rightContainer: {
    flex: .35,
    margin: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  upVote:{
    backgroundColor: 'black',
    color: 'white',
    margin: 6,
    padding: 2
  }
});

const mapStateToProps = (state) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return { dataSource: ds.cloneWithRows(state.playlist) };
};

export default connect(mapStateToProps)(Playlist);
