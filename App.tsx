import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const getRandomColor = useCallback(() => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  const [randomBackgroundColor, setRandomBackgroundColor] =
    useState(getRandomColor);

  const [circleColors, setCircleColors] = useState<string[]>([]);

  const updateColors = useCallback(() => {
    const newCircleColors = Array.from({length: 15}, () => getRandomColor());
    setCircleColors(newCircleColors);

    setRandomBackgroundColor(getRandomColor());
  }, [getRandomColor]);

  useEffect(() => {
    updateColors();
  }, [updateColors]);

  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={randomBackgroundColor} />
        <View style={[styles.bg, {backgroundColor: randomBackgroundColor}]}>
          <View style={styles.circleContainer}>
            {circleColors.map((color, index) => (
              <TouchableOpacity key={index} onPress={updateColors}>
                <View style={[styles.circle, {backgroundColor: color}]}>
                  <Text style={styles.text1}>play</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={updateColors}>
            <View style={[styles.btn, {backgroundColor: getRandomColor()}]}>
              <Text style={styles.text}>Change All Colors</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBlockStart: '35%',
    //justifyContent: 'center',
    color: 'white',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBlockStart: '35%',
    //justifyContent: 'center',
    color: 'white',
  },
  btn: {
    height: 50,
    margin: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  bg: {
    height: '100%',
    width: '100%',
  },
  circleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 40,
    margin: 10,
  },
});

export default App;
