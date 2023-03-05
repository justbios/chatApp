import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IButtonSend {
    onPress: () => void;
}

const ButtonSend: FC<IButtonSend> = ({onPress}) => {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<View style={styles.wrapper}>
				<Icon name='send' size={20} color={colors.white} />
			</View>
		</Pressable>
	);
};

export default ButtonSend;

const styles = StyleSheet.create({
	wrapper: {
		width: 40,
		height:40,
		borderRadius: 20,
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	container: {
		// paddingHorizontal: 15,
		// paddingBottom: 5,
		padding: 10,
		backgroundColor: colors.grayLight,
		position: 'absolute',
		right: 40,
		top: -30,
		zIndex: 100,
		borderRadius: 50
	}
});