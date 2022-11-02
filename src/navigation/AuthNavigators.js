import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'


import { View, Text } from 'react-native'
import React from 'react'
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const authStack = createStackNavigator();

export default function AuthStack() {
  return (
    <authStack.Navigator>
        <authStack.Screen 
            name='SignInWelcomeScreen' 
            component={SignInWelcomeScreen}
            options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
        <authStack.Screen 
            name='SignInScreen' 
            component={SignInScreen}
            options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
        <authStack.Screen 
            name='HomeScreen' 
            component={HomeScreen}
            options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
    </authStack.Navigator>
  )
}