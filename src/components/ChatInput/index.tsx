import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../utils/colors';
import ButtonSend from '../Buttons/ButtonsSend';

interface IChatInput {
    onChangeText: (text: string) => void;
    value?: string;
    onPress: () => void;
}

const ChatInput: FC<IChatInput> = ({onChangeText, value, onPress}) => {

	return (
		<View style={styles.wrapper}>
			<TextInput
				onChangeText={onChangeText}
				style={{fontSize: 15}}
				value={value}
			/>
			<ButtonSend onPress={onPress} />
		</View>
	);
};

export default ChatInput;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors.white,
		height: 80,
		padding: 15,
		position: 'relative',
	}
});