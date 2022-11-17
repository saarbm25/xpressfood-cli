import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  useWindowDimensions,
  PanResponder,
} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../global/styles';

export default function AnimationScreen() {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        const {x, y} = convertToCircle(
          evt.nativeEvent.pageX,
          evt.nativeEvent.pageY,
          100,
          width / 2,
          height / 2,
        );
        gestureState.moveX;
        touch.setValue({
          x: x,
          y: y,
        });
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
    }),
  ).current;
  const dim = useWindowDimensions();
  const width = dim.width;
  const height = dim.height;
  const touch = useRef(
    new Animated.ValueXY({x: width / 2, y: height / 2}),
  ).current;

  const convertToCircle = (x, y, r, xA, yA) => {
    let circleX = xA - x;
    let circleY = yA - y;
    const dist = (circleX ** 2 + circleY ** 2) ** 0.5;
    circleX = (circleX / dist) * r;
    circleY = (circleY / dist) * r;

    // console.log({x: circleX, y: circleY, dist: dist});
    return {x: -circleX + xA, y: -circleY + yA};
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View
        style={[
          styles.squre,
          {
            position: 'absolute',
            left: Animated.subtract(touch.x, 25),
            top: Animated.subtract(touch.y, 25),
          },
        ]}></Animated.View>
      <View
        style={[
          styles.circleOutline,
          {top: height / 2 - 100, left: width / 2 - 100},
        ]}></View>
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
    borderRadius: 25,
  },
  circleOutline: {
    width: 200,
    height: 200,
    position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 100,
    borderColor: colors.black,
    borderWidth: 1,
  },
});
