import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from '../../components/Buttons';
import { RootStackParamList } from '../../navigation';
import { Routes } from '../../navigation/Routes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../services/firebase';
import { colors } from '../../utils/colors';
import Input from '../../components/Input';
import Text from '../../components/Text';
import AuthWrapper from '../../components/AuthWrapper';
import Icon from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SingIn: FC<
  NativeStackScreenProps<RootStackParamList, Routes.SING_IN>
> = ({navigation}) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [signInWithFacebook] = useSignInWithFacebook(firebaseAuth);
	const [signInWithGoogle] = useSignInWithGoogle(firebaseAuth);
	const goToSingUp = () => navigation.navigate(Routes.SING_UP);

	const onSingIn = async () => {
		try {
			return await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch {
			return Alert.alert('user not found');
		}
	};

	return (
		<AuthWrapper title={'Login'} subTitle={'Login Your account'} >
			<View style={styles.container}>
				<Input label="Email" placeholder='Email' icon={<Icon name='lock' size={20} />} onChangeText={setEmail} />
				<Input label="Password" placeholder='Password' icon={<Icon name='mail' size={20} />} onChangeText={setPassword} />
				<View style={styles.singInButton}>
					<Button onPress={onSingIn} buttonText="Sing in" />
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
						onPress={() => signInWithGoogle()} />
					<Button
						bg={colors.grayLight}
						buttonText='Connect with Facebook'
						icon={<Icon name='facebook' size={20} />}
						text={{color: colors.gray}}
						onPress={signInWithFacebook} />
				</View>
				<View style={styles.footer}>
					<Text 
						color={colors.gray}>
							Don`t Have An Account?<Text color={colors.green} onPress={goToSingUp}> Sing up</Text>
					</Text>
				</View>
			</View>
		</AuthWrapper>
	);
};

export default SingIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 40
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
		marginTop: 20
	},
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	}
});
