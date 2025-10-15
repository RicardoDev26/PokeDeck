import React from 'react';
import { Text } from 'react-native';

const createMockIcon = (name) => (props) => <Text>{props.name || name}</Text>;

export const EvilIcons = createMockIcon('EvilIcons');
export const Feather = createMockIcon('Feather');
export const MaterialIcons = createMockIcon('MaterialIcons');