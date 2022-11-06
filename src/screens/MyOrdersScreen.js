import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {colors} from '../global/styles';

export default function MyOrdersScreen() {
  const dim = useWindowDimensions();
  const width = dim.width;
  const translation = useRef(new Animated.Value(width / 2)).current;

  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(translation, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(translation, {
  //       toValue: -1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }, []);

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderMove={event => {
        translation.setValue(event.nativeEvent.pageX);
      }}>
      <Animated.View
        style={[
          styles.squre,
          {
            position: 'absolute',
            left: Animated.subtract(translation, 25),
            top: Animated.subtract(translation, 25),
            // transform: [
            //   {
            //     translateX: translation.interpolate({
            //       inputRange: [-1, 1],
            //       outputRange: [-100, 100],
            //     }),
            //   },
            //   {
            //     translateY: Animated.multiply(
            //       Animated.multiply(translation, translation),
            //       100,
            //     ),
            //   },
            // ],
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
