import { signOut } from 'firebase/auth';
import React, { FC } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Buttons';
import Input from '../../components/Input';
import Text from '../../components/Text';
import UserChat from '../../components/UserChat';
import { firebaseAuth } from '../../services/firebase';
import { colors } from '../../utils/colors';
import { getFirestore, collection, DocumentData } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firebaseApp } from '../../services/firebase';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { Routes } from '../../navigation/Routes';

const Dashboard: FC<NativeStackScreenProps<RootStackParamList, Routes.DASHBOARD>> = ({navigation}) => {
	const logOut = () => signOut(firebaseAuth);


	
	const [value] = useCollection(
		collection(getFirestore(firebaseApp), 'hooks'),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);
	
	const users = value?.docs?.map(el => el.data());
	console.log(users);
	
	const goToChat = (item: DocumentData) => () => navigation.navigate(Routes.CHAT, {name: item.name, id: item.id});

	return (
		<SafeAreaView style={styles.wrapper}>
			<StatusBar barStyle="light-content" />
			<View style={styles.container}>
				<Text size='lg' textStyles={styles.title}>Chats</Text>
				<Input placeholder='Search' icon={<Icon name='search1' size={20} color={colors.gray} />} />
				<View style={styles.chatBlock}>
					<FlatList
						data={users}
						renderItem={({item}) =>	
							<UserChat
								key={item?.id}
								name={item?.name}
								time={'12.22'}
								lastMessage="lastMessage"
								messageCount={13}
								userImage={require('../../assets/image/user.jpg')}
								onPress={goToChat(item)}
							/>}
					
					/>
				</View>
				<Button onPress={logOut}  buttonText="Log Out" />
				
			</View>
		</SafeAreaView>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.background,
	},
	title: {
		color: colors.black,
		fontWeight: 'bold',
		margin: 10,
	},
	container: {
		paddingHorizontal: 20,
	},
	chatBlock: {
		marginVertical: 20
	}
});
