import React from 'react';
import {StyleSheet, View} from 'react-native';
import AddressBar from './components/Address';
import HomePage from './components/homePage';
import TopCategories from './components/TopCategories';
function App(): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <HomePage />
        <AddressBar />
        <TopCategories />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
