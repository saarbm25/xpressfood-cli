import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

export default function Card({
  onPress,
  restaurant,
  deliveryAvailable,
  discountAvailable,
  numberOfReviews,
  Address,
  Distance,
  averageReview,
  image,
  screenWidth,
}) {
  return (
    <TouchableOpacity style={[styles.card]}>
      <View></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 200,
    width: '100%',
    backgroundColor: colors.blue,
  },
});
