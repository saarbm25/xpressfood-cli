import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Card({
  onPress,
  restaurant,
  deliveryAvailable,
  discountAvailable,
  numberOfReviews,
  address,
  distance,
  averageReview,
  image,
  screenWidth,
}) {
  return (
    <View style={[styles.container, {width: screenWidth}]}>
      <TouchableOpacity style={[styles.card]}>
        <View style={styles.reviewContainer}>
          <Text style={[styles.reviewText, {fontSize: 18}]}>
            {averageReview}
          </Text>
          <Text style={[styles.reviewText, {fontSize: 12}]}>
            {numberOfReviews + ' reviews'}
          </Text>
        </View>
        <View>
          <Image style={[styles.image]} source={{uri: image}}></Image>
          <Text style={styles.restaurantName}>{restaurant}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" size={20} color={colors.grey2}></Icon>
              <Text style={styles.locationText}>
                {distance} km {'\t'}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              {/* <Icon name="map-marker" size={20} color={colors.grey2}></Icon> */}
              <Text style={styles.locationText}>{'|\t' + address}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    height: 200,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey3,
    overflow: 'hidden',
  },
  image: {
    height: 135,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    marginTop: 2,
    color: colors.grey1,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginHorizontal: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
  },
  reviewContainer: {
    backgroundColor: 'rgba(52,52,52,0.2)',
    width: 80,
    height: 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    elevation: 1,
    zIndex: 1,
  },
  reviewText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
