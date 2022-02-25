import React from 'react';
import {
  SafeAreaView,StyleSheet} from 'react-native';
import Header from './src/Components/Header/Header';
import Products from './src/Components/Products/Products';



const App = () => {
  

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Header/>
      <Products/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
    overflow: 'scroll',
  },
});


export default App;
