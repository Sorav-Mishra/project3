import React, {PropsWithChildren, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../pngs/1.png';
import DiceTwo from '../pngs/2.png';
import DiceThree from '../pngs/3.png';
import DiceFour from '../pngs/4.png';
import DiceFive from '../pngs/5.png';
import DiceSix from '../pngs/6.png';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'orange'} />
      <View style={styles.bg}>
        <View style={styles.container}>
          <Dice imageUrl={diceImage} />
          <Pressable onPress={rollDiceOnTap}>
            <View style={styles.btn}>
              <Text style={styles.text}>Roll the Dice</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBlockStart: 10,
    color: '#ffffff',
    textAlign: 'center',
  },

  diceImage: {
    height: 200,
    width: 200,
  },
  container: {
    marginBlockStart: '70%',
    marginHorizontal: '25%',
  },
  bg: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  btn: {
    //textAlign: 'center',
    height: 60,
    marginBlockStart: 20,
    backgroundColor: 'orange',
  },
});
