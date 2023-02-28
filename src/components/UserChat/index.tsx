import React, { FC } from 'react';
import {
	View,
	StyleSheet,
	Image,
	ImageSourcePropType,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../utils/colors';
import Text from '../Text';

interface IUserChatProps {
  name: string;
  lastMessage?: string;
  time: string;
  messageCount?: number | string;
  userImage?: ImageSourcePropType;
  onPress: () => void;
}

const UserChat: FC<IUserChatProps> = ({
	userImage,
	name,
	lastMessage,
	time,
	messageCount,
	onPress,
}) => {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					{userImage ? 
						<Image style={styles.userImage} source={userImage} /> 
						:
						<Icon name='search1' size={20} color={colors.gray} />
					}
				</View>
				<View style={{ marginLeft: 15 }}>
					<Text size='md' textStyles={{fontWeight: 'bold'}}>{name}</Text>
					<Text size='sm' color={colors.gray} textStyles={{marginTop:4}}>{lastMessage}</Text>
				</View>
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<Text>{time}</Text>
				{messageCount && (
					<View style={styles.messageCount}>
						<Text>{messageCount}</Text>
					</View>
				)}
			</View>
		</Pressable>
	);
};

export default UserChat;

const styles = StyleSheet.create({
	container: {
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	messageCount: {
		backgroundColor: colors.green,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 3,
		marginTop: 5,
	},
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 30,
	},
});
