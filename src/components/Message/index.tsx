import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../utils/colors';
import Text from '../Text';
import moment from 'moment';


interface IMessage {
    text: string;
    myMessage: boolean;
	date: string | Date | number;
}

const Message: FC<IMessage> = ({text, myMessage, date}) => {
	const textColor = myMessage ? colors.white : colors.black;
	return (
		<View style={[styles.wrapper, myMessage ? styles.myMessage : styles.userMessage]}>
			<Text color={textColor}>{text}</Text>
			<Text textStyles={{fontSize: 10, alignSelf: 'flex-end'}} color={textColor}>{moment(date).format('hh:mm')}</Text>
		</View>
	);
};

export default Message;

const styles = StyleSheet.create({
	wrapper: {
		padding: 15,
		maxWidth: '70%',
		minWidth: '60%',
		borderRadius: 10,
		marginBottom: 20
	},
	myMessage: {
		backgroundColor: colors.green,
		alignSelf: 'flex-end',
	},
	userMessage: {
		backgroundColor: colors.white,
		alignSelf: 'flex-start',
	}

});