import React from 'react';
import {StyleSheet, View} from 'react-native';
import EditableText from './conponents/EditableText';
//import EditableText from './components/EditableText'; // Import the EditableText component

const App = () => {
  return (
    <View style={styles.container}>
      <EditableText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
