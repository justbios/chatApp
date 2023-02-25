import React, { FC } from 'react';
import { Stack } from '.';
import SingIn from '../screens/Auth/SingIn';
import SingUp from '../screens/Auth/SingUp';
import { Routes } from './Routes';

const AuthNavigation: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={Routes.SING_IN} component={SingIn} />
			<Stack.Screen name={Routes.SING_UP} component={SingUp} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
