import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import { NavigationContainer } from '@react-navigation/native';
import { firebaseAuth } from '../services/firebase';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { Routes } from './Routes';

export type RootStackParamList = {
  [Routes.SING_IN]: undefined;
  [Routes.DASHBOARD]: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation:FC = () => {
  const [user] = useIdToken(firebaseAuth);
   return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
   )
}

export default RootNavigation