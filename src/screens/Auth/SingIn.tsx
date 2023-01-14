import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Button from '../../components/Buttons';
import { RootStackParamList } from '../../navigation';
import { Routes } from '../../navigation/Routes';
import { width } from '../../utils/constants';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useIdToken } from 'react-firebase-hooks/auth';
import {firebaseAuth} from '../../services/firebase'

const SingIn:FC<NativeStackScreenProps<RootStackParamList, Routes.SING_IN>> = ({navigation}) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSingIn =  () =>  {
    signInWithEmailAndPassword(firebaseAuth, email, password)
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Chat App</Text>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail} />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} onChangeText={setPassword} />
          </View>
          <Button onPress={onSingIn} buttonText='Sing in' />
      </SafeAreaView>
  )
}

export default SingIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#015482',
  },
  input: {
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    padding: 10,
    fontSize: 16,
    width: width * 0.8,
  },
  inputWrapper: {
    marginVertical: 20,
    marginBottom: 40
  },
  title: {
    fontSize: 24,
    marginBottom: 25,
    color: '#FFFFFF'
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 10
  }

})