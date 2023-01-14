import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import SingIn from '../screens/Auth/SingIn';
import Dashboard from '../screens/Dashboard';
import { firebaseAuth } from '../services/firebase';
import { Routes } from './Routes';

export type RootStackParamList = {
  [Routes.SING_IN]: undefined;
  [Routes.DASHBOARD]: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator:FC = () => {
  const [user, loading, error] = useIdToken(firebaseAuth);
    return (
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            {user ?
            (<Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />)
            :
            (<Stack.Screen name={Routes.SING_IN} component={SingIn} />)
          }
          </Stack.Navigator>
    )
}

export default AppNavigator