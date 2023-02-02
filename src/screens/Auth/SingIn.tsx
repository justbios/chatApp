import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Buttons';
import { RootStackParamList } from '../../navigation';
import { Routes } from '../../navigation/Routes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../services/firebase';
import { colors } from '../../utils/colors';
import Input from '../../components/Input';

const SingIn: FC<
  NativeStackScreenProps<RootStackParamList, Routes.SING_IN>
> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSingIn = () => {
    return signInWithEmailAndPassword(firebaseAuth, email, password).catch(() =>
      Alert.alert('user not found')
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Chat App</Text>
      <Input label="Email" onChangeText={setEmail} />
      <Input label="Password" onChangeText={setPassword} />
      <View style={styles.singInButton}>
        <Button onPress={onSingIn} buttonText="Sing in" />
      </View>
    </SafeAreaView>
  );
};

export default SingIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgraund,
  },
  title: {
    fontSize: 24,
    marginBottom: 25,
    color: colors.auth.white,
  },
  singInButton: {
    marginTop: 20,
  },
});
