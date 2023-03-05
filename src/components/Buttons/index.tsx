import React, { FC, ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils/colors';
import { Size } from '../../utils/constants';
import Text from '../Text';

interface IButton {
  onPress: () => void;
  buttonText: string;
  bg?: string;
  text?: {
	color: string;
	size?: keyof typeof  Size;
  }
  icon?: ReactNode
  loading?: boolean;
}

const Button: FC<IButton> = ({ onPress, buttonText, bg = colors.green, text, icon, loading }) => {
	return (
		<TouchableOpacity style={[styles.container, {backgroundColor: bg}]} onPress={onPress}>
			
			{icon && <View style={{marginRight: 10}}>
				{icon}
			</View>}
			{loading ? <ActivityIndicator /> : <Text color={text?.color} size={text?.size}>{buttonText}</Text>}
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		flexDirection: 'row',
		marginVertical: 10
	},
});
