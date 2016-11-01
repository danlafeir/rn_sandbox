import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const createSong = (rowData) => ({
  title: rowData.name,
  artist: rowData.artists[0].name,
  uri: rowData.uri, 
  votes: 0
})

class Search extends Component {
  constructor(){
    super()
    this.state = { 
      value: '',
      dataSource: ds.cloneWithRows([])
   };
  }

  render() {
    let searching = false
    const search = (searchValue) => {
      if(!searching){
        searching = true
        fetch('https://api.spotify.com/v1/search?q='+searchValue+'&type=track&market=US&limit=50')
          .then((response) => response.json().then((data) => {
            searching = false
            const results = data.tracks.items.map(createSong);
            this.setState({ dataSource: ds.cloneWithRows(results) });
          }))
          .catch((err) => console.log(err));
      }
    }

    const renderRow = (rowData) => {
      return (
        <View style={styles.row}>
          <View style={styles.leftContainer}>
            <Text>{rowData.title}</Text>
            <Text>{rowData.artist}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.add}
                  onPress={() => this.props.dispatch({
                    type: '@playlist/add',
                    song: createSong(rowData)
                  })}>
              {`add`}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={{flex:1}}>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => {
            search(text)
            this.setState({ value: text })
          }}
          placeholder={'Search by song/artist'}
          value={this.state.value}/>
        <ListView
          style={{flex:1}}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={renderRow}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
  },
  leftContainer: {
    flex: .85,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15
  },
  rightContainer: {
    flex: .15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
    padding: 5,
    paddingLeft: 10
  }, 
  searchResults: {
    flex: .85
  },
  add: {
    backgroundColor: 'black',
    color: 'white',
    margin: 6,
    padding: 2
  }
});

export default connect()(Search);
