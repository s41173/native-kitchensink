import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DrawerItem = ({ label, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<Text style={{ paddingVertical: 20, paddingLeft: 12 }}>{label}</Text>
	</TouchableOpacity>
);

export default DrawerItem;
