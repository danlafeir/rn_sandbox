import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput
} from 'react-native';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Search extends Component {
  constructor(){
    super()
    this.state = { 
      value: '',
      dataSource: ds.cloneWithRows([])
   }
  }

  render() {
    const search = (searchValue) => {
      console.log("searching:", searchValue);
      fetch('https://api.spotify.com/v1/search?q='+searchValue+'&type=track&market=US&limit=50')
        .then((response) => response.json().then((data) => {
          this.setState({ dataSource: ds.cloneWithRows(data.tracks.items) });
        }))
        .catch((err) => console.log(err));
    }

    const renderRow = (rowData) => {
      return (
        <View style={styles.row}>
          <Text style={styles.searchResults}
                numberOfLines={1}>
            {`${rowData.name} | ${rowData.artists[0].name}`}
          </Text>
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
          value={this.state.value}/>
        <ListView
          style={{flex:1}}
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
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
    padding: 5,
    paddingLeft: 10
  }
});

export default Search;
