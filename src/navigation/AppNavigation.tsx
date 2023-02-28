import React, { FC } from 'react';
import { Stack } from '.';
import Chat from '../screens/Chat';
import Dashboard from '../screens/Dashboard';
import { Routes } from './Routes';

const AppNavigation: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
			<Stack.Screen name={Routes.CHAT} component={Chat} />
		</Stack.Navigator>
	);
};

export default AppNavigation;
