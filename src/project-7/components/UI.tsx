import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface UIProps {
  gameState: string[];
  onChangeItems: (itemNumber: number) => void;
}

const UI: React.FC<UIProps> = ({gameState, onChangeItems}) => {
  return (
    <View style={styles.grid}>
      {gameState.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cell}
          onPress={() => onChangeItems(index)}>
          <Text style={styles.cellText}>
            {item === 'empty' ? '' : item === 'circle' ? 'O' : 'X'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  cellText: {
    fontSize: 36,
    color: '#fff',
  },
});

export default UI;
