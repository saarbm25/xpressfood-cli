import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import React from 'react';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.statusBar}></StatusBar>
      <SignInScreen></SignInScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
