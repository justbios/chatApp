import React, { ChangeEvent, FC, ReactNode } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../utils/colors';

interface IInput {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  icon?: ReactNode;
  style?: StyleMedia
}

const Input: FC<IInput> = ({ label, onChange, onChangeText, placeholder, icon, style}) => {
	return (
		<View style={styles.wrapper}>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={[styles.inputWrapper, style]}>
				{icon && <View style={{marginHorizontal: 10}}>
					{icon}
				</View>}
				<TextInput
					style={styles.input}
					onChange={onChange}
					onChangeText={onChangeText}
					placeholder={placeholder}
				/>
			</View>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	input: {
		height: 50,
		fontSize: 16,
		paddingLeft: 5,
		width: '100%',
	},
	label: {
		color: colors.black,
		fontSize: 16,
		marginBottom: 10,
	},
	wrapper: {
		marginVertical: 10,
	},
	inputWrapper: {
		backgroundColor: colors.grayLight,
		borderRadius: 40,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10
	},
});
