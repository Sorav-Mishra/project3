import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//import changeNavigationBarColor from 'react-native-navigation-bar-color';

//import Button from 'react-native';
function App(): JSX.Element {
  const [ramdomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0987654321ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackgroundColor(color);
    // changeNavigationBarColor(color, true);
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={ramdomBackgroundColor} />
        <View style={[styles.bg, {backgroundColor: ramdomBackgroundColor}]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.btn}>
              <Text style={styles.text}>Press me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBlockStart: 10,
    fontSize: 18,
    fontWeight: 900,
    textAlign: 'center',
    color: 'white',
    // alignContent: 'center',
    // justifyContent: 'center',
    // marginBlockStart: 15,
  },

  btn: {
    height: 50,
    width: 120,
    borderRadius: 10,
    backgroundColor: 'orange',
    marginBlockStart: '100%',
    marginHorizontal: '35%',
  },

  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gray',
  },
});

export default App;
