import { StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.statusBar}></StatusBar>
      <RootNavigator></RootNavigator>
    </View>
  );
}

// commment

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
