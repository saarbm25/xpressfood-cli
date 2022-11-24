import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

export default function Marker() {
  return (
    <View>
      <View style={styles.marker}>
        <View style={styles.topLeftEdge} />
        <View style={styles.topRightEdge} />
        <View style={styles.bottomLeftEdge} />
        <View style={styles.bottomRightEdge} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  marker: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  topLeftEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    borderColor: colors.button,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderTopLeftRadius: 25,
  },
  topRightEdge: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 40,
    width: 40,
    borderColor: colors.button,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderTopRightRadius: 25,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 40,
    width: 40,
    borderColor: colors.button,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderBottomLeftRadius: 25,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 40,
    width: 40,
    borderColor: colors.button,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderBottomRightRadius: 25,
  },
});
