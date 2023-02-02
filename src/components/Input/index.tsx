import React, { ChangeEvent, FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../utils/colors';
import { width } from '../../utils/constants';

interface IInput {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

const Input: FC<IInput> = ({ label, onChange, onChangeText, placeholder }) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChange={onChange}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: colors.auth.gray,
    backgroundColor: colors.auth.white,
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    padding: 10,
    fontSize: 16,
    width: width * 0.8,
  },
  label: {
    color: colors.auth.white,
    fontSize: 14,
    marginBottom: 10,
  },
  inputWrapper: {
    marginVertical: 10,
  },
});
