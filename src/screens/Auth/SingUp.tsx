import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from '../../components/Buttons';
import { RootStackParamList } from '../../navigation';
import { Routes } from '../../navigation/Routes';
import { firebaseAuth } from '../../services/firebase';
import { colors } from '../../utils/colors';
import Input from '../../components/Input';
import Text from '../../components/Text';
import AuthWrapper from '../../components/AuthWrapper';
import Icon from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SingUp: FC<
  NativeStackScreenProps<RootStackParamList, Routes.SING_UP>
> = ({navigation}) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(firebaseAuth);
	const [updateProfile] = useUpdateProfile(firebaseAuth);

	const goToSingIn = () => navigation.navigate(Routes.SING_IN);

	const RegisterUser = async () => {
		try {
			const user = await createUserWithEmailAndPassword(email, password);
			if(user) {
				await updateProfile({displayName: name});
			}
		} catch (e) {
			return Alert.alert('bad credentials');
		}
	};

	return (
		<AuthWrapper title={'Register'} subTitle={'Create Your Account'} >
			<View style={styles.container}>
				<Input 
					label="Name" 
					placeholder='User Name' 
					icon={<IconFontAwesome5 name='user-alt' size={20} />} 
					onChangeText={setName} 
				/>
				<Input 
					label="Email"
					placeholder='Email'
					icon={<Icon name='lock' size={20} />} 
					onChangeText={setEmail} 
				/>
				<Input 
					label="Password" 
					placeholder='Password' 
					icon={<Icon name='mail' size={20} />} 
					onChangeText={setPassword} 
				/>
				<View style={styles.singInButton}>
					<Button onPress={RegisterUser} buttonText="Sing in" />
				</View>
				<View style={styles.connectWith}>
					<Text size='lg' color={colors.gray}>Or connect with</Text>
				</View>
				<View style={styles.buttons}>
					<Button
						bg={colors.grayLight}
						buttonText='Connect with Google'
						icon={<IconAntDesign name='google' size={20} />}
						text={{color: colors.gray}}
						onPress={console.log} />
					<Button
						bg={colors.grayLight}
						buttonText='Connect with Facebook'
						icon={<Icon name='facebook' size={20} />}
						text={{color: colors.gray}}
						onPress={console.log} />
				</View>
				<View style={styles.footer}>
					<Text 
						color={colors.gray}>
							Don`t Have An Account?<Text color={colors.green} onPress={goToSingIn}> Sing In</Text>
					</Text>
				</View>
			</View>
		</AuthWrapper>
	);
};

export default SingUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 10
	},
	singInButton: {
		marginVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	connectWith: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttons: {
		marginTop: 10
	},
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 40
	}
});
