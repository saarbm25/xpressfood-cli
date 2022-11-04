import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {View, Text} from 'react-native';
import React from 'react';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';

const screenStack = createStackNavigator();

export default function ScreenStack() {
  return (
    <screenStack.Navigator>
      <screenStack.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <screenStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <screenStack.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <screenStack.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </screenStack.Navigator>
  );
}
