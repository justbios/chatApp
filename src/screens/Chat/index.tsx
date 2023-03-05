import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatInput from '../../components/ChatInput';
import Message from '../../components/Message';
import { RootStackParamList } from '../../navigation';
import { Routes } from '../../navigation/Routes';
import { colors } from '../../utils/colors';
import { firebaseApp, firebaseAuth } from '../../services/firebase';
import { useIdToken } from 'react-firebase-hooks/auth';
import { addDoc, collection, getFirestore, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';

interface IMessage {
    _id: string;
    text: string;
	user: {
		_id: number | string;
		name: string
	},
    createdAt: any;
}

const Chat:FC<NativeStackScreenProps<RootStackParamList, Routes.CHAT>> = ({navigation, route}) => {
	const db = getFirestore(firebaseApp);
	const {id, name} = route.params;
	const [user] = useIdToken(firebaseAuth);
	const chatId = user && id > user?.uid ? user?.uid+'-'+id : id+'-'+user?.uid;

	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState<IMessage[]>([]);

	const msgsRef = collection(db, 'messages', chatId, 'chat');
	const q = query(msgsRef, orderBy('createdAt', 'asc'));

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			title: name
		});
	}, [navigation]);
	
	useEffect(() => {
		onSnapshot(q, (querySnapshot) => {
			const msgs: IMessage[] = [];
			querySnapshot.forEach((doc) => {
				msgs.push(doc.data() as IMessage);
			});
			setMessages(msgs);
		});
	}, []);


	const onSend = async () => {
		const newMessages = {
			text: message,
			user: {
				_id: user?.uid,
				name: user?.displayName
			},
			createdAt: serverTimestamp(),
		};


		await addDoc(collection(db, 'messages', chatId, 'chat'), newMessages);
		setMessage('');
	};

	return (
		<View style={[styles.wrapper]}>
			<FlatList
				data={messages}
				style={{flex: 1, marginBottom: 30}}
				keyExtractor={(item) => item._id}
				contentContainerStyle={{paddingHorizontal: 15,  justifyContent: 'flex-end'}}
				renderItem={({item}) => 
					<Message
						text={item.text}
						myMessage={item?.user._id === user?.uid} 
						date={item.createdAt.toDate()}
					/>}
			/>
			<ChatInput onPress={onSend} value={message} onChangeText={setMessage} />
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.grayLight
	}
});