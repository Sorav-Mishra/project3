import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AppUI = (): JSX.Element => {
  const flags = ['Indea', 'USA'];

  return (
    <View style={styles.container}>
      {flags.map((flag, index) => (
        <View key={index} style={styles.flag}>
          {flag}
        </View>
      ))}
      <Text>hello from solo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  flag: {
    height: 100,
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
export default AppUI;
