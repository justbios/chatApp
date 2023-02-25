import React, { FC, PropsWithChildren } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';
import Text from '../Text';

interface IAuthWrapperProps {
    title: string;
    subTitle: string;
}

const AuthWrapper: FC<PropsWithChildren<IAuthWrapperProps>> = ({title, subTitle, children}) => {
	const {top, bottom, left, right} = useSafeAreaInsets();

	return (
		<ScrollView style={{backgroundColor: colors.background}}>
			<View style={[styles.container, 
				{paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }]
			}>
				<StatusBar translucent backgroundColor="transparent"  barStyle='light-content' />
				<View style={styles.header}>
					<View style={styles.title}>
						<Text size='lg'>
							{title}
						</Text>
						<Text size='m' textStyles={{marginTop: 10}}>
							{subTitle}
						</Text>
					</View>
				</View>
				<View style={styles.body}>
					{children}
				</View>
			</View>
		</ScrollView>
	);
};

export default AuthWrapper;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.green,
		height: '100%'
	},
	header: {
		flex: 1,
		height: '10%'
	},
	body: {
		backgroundColor: colors.background,
		height: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 10,
	},
	title: {
		padding: 20
	}
});