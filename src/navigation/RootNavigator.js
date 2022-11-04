import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './ScreenNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <ScreenStack></ScreenStack>
    </NavigationContainer>
  );
}
