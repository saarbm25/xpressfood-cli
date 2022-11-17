import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppTextInput({ children, placeholder, icon, secure, onChangeText }) {
    const [visable, useVisable] = useState(secure);
    const [eye, useEye] = useState('eye');
    const changeVisibility = () => {
        useVisable(!visable);
        eye === 'eye' ? useEye('eye-off') : useEye('eye');
    };
  return (
      <View style={styles.container}>
          {icon && <Icon name={icon} size={28} color={colors.grey3} style={styles.icon}></Icon>}
          <TextInput
              onChangeText={onChangeText}
              style={styles.inputText}
              placeholder={placeholder}
              secureTextEntry={visable}
          >{visable}</TextInput>
          <TouchableOpacity
              onPress={changeVisibility}>
              {secure && <Icon name={eye} size={22} color={colors.grey3} style={styles.secure}></Icon>}  
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: colors.grey3,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
    },
    icon: {
        paddingLeft: 10,
    },
    secure: {
        paddingRight: 10,
    }

})