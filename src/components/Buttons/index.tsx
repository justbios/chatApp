import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { width } from '../../utils/constants';

interface IButton {
  onPress: () => void;
  buttonText: string;
}

const Button: FC<IButton> = ({ onPress, buttonText }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
  },
});
