import React, { FC } from 'react';
import { Stack } from '.';
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
		</Stack.Navigator>
	);
};

export default AppNavigation;
