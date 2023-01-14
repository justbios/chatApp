import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import React, { FC} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Button from '../../components/Buttons';
import { firebaseAuth } from '../../services/firebase';
import { width } from '../../utils/constants';

const Dashboard:FC = () => {
  const navigation = useNavigation()

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome Dashboard</Text>
        <Button buttonText='log out' onPress={() => signOut(firebaseAuth)} />
      </SafeAreaView>
  )
}

export default Dashboard;

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