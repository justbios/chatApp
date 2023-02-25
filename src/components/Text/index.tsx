import React, { FC, ReactNode } from 'react';
import {Text as NativeText, TextStyle} from 'react-native';
import { colors } from '../../utils/colors';
import { Size } from '../../utils/constants';

interface ITextProps {
    textStyles?: TextStyle;
    size?: keyof typeof  Size;
    color?: string;
    children: string | ReactNode;
	onPress?: () => void;
	numberOfLines?: number;
}

const Text:FC<ITextProps> = ({textStyles, size = 'm', children, color = colors.white, onPress, numberOfLines}) => {
	return (
		<NativeText style={[{fontSize: Size[size], color: color}, textStyles]} onPress={onPress} numberOfLines={numberOfLines}>
			{children}
		</NativeText>
	);
};

export default Text;