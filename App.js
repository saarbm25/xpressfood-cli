import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.statusBar}></StatusBar>
          <RootNavigator></RootNavigator>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

// commment

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
