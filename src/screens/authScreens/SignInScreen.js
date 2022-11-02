import React from 'react';
import { View, Text, StyleSheet, Dimentions, TouchableHighlight, TouchableOpacity } from 'react-native'

import { colors, parameters, globalStyles } from '../../global/styles' 
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

export default function SignInScreen({navigation}) {
  return (
      <View style={styles.container}>
          <Header title='MY ACCOUNT' icon='arrow-left' onPress={() => navigation.goBack()}></Header>
          <View style={{padding: 10}}>
              <Text style={globalStyles.title}>
                  Sign-In
              </Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Text style={styles.smallText}>
                  Please enter the email and password
              </Text>
          </View>
          <AppTextInput placeholder='Email' icon='mail'></AppTextInput>
          <AppTextInput placeholder='Password' icon='lock' secure={true}></AppTextInput>
          <AppButton onPress={() => navigation.navigate("HomeScreen")}>SIGN IN</AppButton>
          <TouchableOpacity style={{alignItems: 'center', marginVertical: 20}}>
              <Text style={[styles.smallText, {fontSize: 14, textDecorationLine: 'underline'}]}>
                  Forgot Password?
              </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
                OR
            </Text> 
          </View>
          <AppButton icon='facebook' color={colors.blue}>Sign In With Facebook</AppButton>
          <AppButton icon='google' color={colors.red}>Sign In With Google</AppButton>
          <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>
                  New of XpressFood ?
              </Text>
              <AppButton inverted={true} width='50%'>Create an account</AppButton>
          </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    smallText: {
        color: colors.grey3,
        fontSize: 16,
    }
})