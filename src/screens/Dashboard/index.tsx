import { signOut } from 'firebase/auth';
import React, { FC } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import Button from '../../components/Buttons';
import UserChat from '../../components/UserChat';
import { firebaseAuth } from '../../services/firebase';
import { colors } from '../../utils/colors';

const Dashboard: FC = () => {
  const logOut = () => signOut(firebaseAuth);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Messages</Text>
      <UserChat
        name={'namee'}
        time={'12.22'}
        lastMessage="lastMessage"
        messageCount={13}
        userImage={require('../../assets/image/user.jpg')}
        onPress={console.log}
      />
      <Button onPress={logOut} buttonText="Log Out" />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgraund,
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    color: '#3160aa',
  },
  title: {
    fontSize: 25,
    color: colors.dashboard.white,
    margin: 20,
  },
});
