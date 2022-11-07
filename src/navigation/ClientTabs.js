import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../global/styles';
import MyAccountScreen from '../screens/MyAccountScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import AnimationScreen from '../screens/AnimationScreen';

const clientTabs = createBottomTabNavigator();

export default function ClientTabs() {
  return (
    <clientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.button,
        tabBarHideOnKeyboard: true,
      }}>
      <clientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color}></Icon>
          ),
        }}></clientTabs.Screen>
      <clientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" size={size} color={color}></Icon>
          ),
        }}></clientTabs.Screen>
      <clientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" size={size} color={color}></Icon>
          ),
        }}></clientTabs.Screen>
      <clientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" size={size} color={color}></Icon>
          ),
        }}></clientTabs.Screen>
      <clientTabs.Screen
        name="AnimationScreen"
        component={AnimationScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Animation',
          tabBarIcon: ({color, size}) => (
            <Icon name="circle" size={size} color={color}></Icon>
          ),
        }}></clientTabs.Screen>
    </clientTabs.Navigator>
  );
}
