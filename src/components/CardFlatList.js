import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {FlatList} from 'react-native-gesture-handler';
import Card from './Card';

export default function CardFlatList({Data, onPick, cardWidth}) {
  return (
    <FlatList
      horizontal={true}
      data={Data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Card
          onPress={onPick}
          image={item.image}
          restaurant={item.restaurantName}
          distance={item.distance}
          averageReview={item.averageReview}
          numberOfReviews={item.numberOfReviews}
          address={item.address}
          screenWidth={cardWidth}></Card>
      )}></FlatList>
  );
}

const styles = StyleSheet.create({});
