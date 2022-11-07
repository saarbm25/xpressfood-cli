import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Animated,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {colors} from '../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBar({onChange, onFocusChanged, textValue}) {
  const [focused, setFocused] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;
  const onFocus = () => {
    setFocused(true);
    onFocusChanged();
    Animated.timing(translation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const onBlur = () => {
    setFocused(false);
    onFocusChanged();
    Animated.timing(translation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <View style={styles.container}>
        {focused && (
          <Animated.View
            style={{
              opacity: translation.interpolate({
                inputRange: [0, 0.35, 1],
                outputRange: [0, 0, 1],
              }),
              transform: [
                {
                  translateX: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}>
            <Pressable onPress={onFocusChanged} focusable={true}>
              <Icon
                name="arrow-left"
                size={28}
                color={colors.grey3}
                style={styles.icon}
                onPress={Keyboard.dismiss}></Icon>
            </Pressable>
          </Animated.View>
        )}
        {!focused && (
          <Animated.View
            style={{
              opacity: translation.interpolate({
                inputRange: [0, 0.35, 1],
                outputRange: [1, 0, 0],
              }),
              transform: [
                {
                  translateX: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -50],
                  }),
                },
              ],
            }}>
            <Icon
              name="magnify"
              size={28}
              color={colors.grey3}
              style={styles.icon}></Icon>
          </Animated.View>
        )}
        <TextInput
          value={textValue}
          ref={input => {
            this.textInput = input;
          }}
          onChangeText={onChange}
          placeholder="What are you looking for?"
          style={styles.inputText}
          onFocus={onFocus}
          onBlur={onBlur}></TextInput>
        <Animated.View
          style={{
            opacity: translation.interpolate({
              inputRange: [0, 0.65, 1],
              outputRange: [0, 0, 1],
            }),
            transform: [
              {
                translateX: translation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              onChange('');
              this.textInput.clear();
            }}>
            <Icon
              name="close-circle"
              size={22}
              color={colors.grey3}
              style={styles.secure}></Icon>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    marginHorizontal: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: colors.grey3,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
});
