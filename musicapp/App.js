import React from 'react';
import musicData from "./music-data.json"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Card from './src/components/Card/Card';

const App = () => {
 const [newList, setNewList] = React.useState(musicData);

 const handleSearch = (text) => {
   
    const filteredList = musicData.filter(item =>{
      const searchedValue = text.toLowerCase()
      const title = item.title.toLowerCase()

      return title.indexOf(searchedValue) > -1
    })
      setNewList(filteredList)
  };

  const renderSong = ({item}) => <Card song={item} />;
  const seperator = () => <View style={styles.seperator} />;

  return <SafeAreaView style={styles.container}>
    <Text style={styles.brand}>Music App</Text>
 
    <View>
    <TextInput onChangeText={handleSearch} style={styles.input} placeholder="Search" />
    </View>
    <FlatList 
      keyExtractor={item => item.id}
      data={newList}
      renderItem={renderSong}
      ItemSeparatorComponent={seperator}
    />

  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  brand: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    textDecorationLine: 'none',
    borderColor: '#999',
    marginBottom: 20,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',}
});

export default App;
