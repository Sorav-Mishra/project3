import React, {useState} from 'react';
import {View, TextInput, StyleSheet, PanResponder} from 'react-native';

const EditableText = () => {
  const [text, setText] = useState('');
  const [position, setPosition] = useState({x: 50, y: 50});

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      setPosition({x: gesture.moveX, y: gesture.moveY});
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[styles.textContainer, {top: position.y, left: position.x}]}
        {...panResponder.panHandlers}>
        <TextInput
          style={styles.textInput}
          placeholder="Tap to write"
          value={text}
          onChangeText={setText}
          multiline
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  textContainer: {position: 'absolute', zIndex: 10},
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default EditableText;
