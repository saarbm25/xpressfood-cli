import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {colors} from '../global/styles';

export default function SearchScreen() {
  const dim = useWindowDimensions();
  const width = dim.width;
  const height = dim.height;
  const touch = useRef(
    new Animated.ValueXY({x: width / 2, y: height / 2}),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => {
          Animated.spring(touch, {
            toValue: {
              y: height / 2,
              x: width / 2,
            },
            useNativeDriver: false,
          }).start();
        }}
        onResponderMove={event => {
          touch.setValue({
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY,
          });
          // console.log(touch)
        }}
        style={[
          styles.squre,
          {
            position: 'absolute',
            left: Animated.subtract(touch.x, 25),
            top: Animated.subtract(touch.y, 25),
          },
        ]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squre: {
    width: 50,
    height: 50,
    backgroundColor: colors.button,
  },
});
