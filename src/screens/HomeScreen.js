import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../global/styles';
import {Data, restaurantData} from '../global/Data';
import {color} from '@rneui/base';
import Card from '../components/Card';
import SmallItemPicker from '../components/SmallItemPicker';
import TextSeparator from '../components/TextSeparator';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  const [delivery, useDelivery] = useState(true);
  const [indexCheck, useIndexCheck] = useState('0');
  const [checkedIndex, setCheckedIndex] = useState('0');

  const setDelivery = () => {
    useDelivery(true);
  };
  const setPickUp = () => {
    useDelivery(false);
  };

  return (
    <View>
      <Header title="XpressFood" icon="menu" cart={true}></Header>
      <View style={{height: '94.5%'}}>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={true}>
          <View>
            <View style={[styles.tabButtonContainer]}>
              <TouchableOpacity
                onPress={setDelivery}
                style={[
                  styles.tabButton,
                  {backgroundColor: delivery ? colors.button : colors.grey5},
                ]}>
                <Text style={styles.buttonText}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={setPickUp}
                style={[
                  styles.tabButton,
                  {backgroundColor: !delivery ? colors.button : colors.grey5},
                ]}>
                <Text style={styles.buttonText}>Pick-up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.spaceTimeContainer}>
              <View style={styles.tabButtonContainer}>
                <Icon
                  style={{marginHorizontal: 5}}
                  name="map-marker"
                  size={28}
                  color={colors.grey2}></Icon>
                <Text style={styles.buttonText}>22 Whatever Street</Text>
              </View>
              <View style={styles.tabButtonContainer}>
                <Icon
                  style={{marginHorizontal: 5}}
                  name="clock"
                  size={28}
                  color={colors.grey2}></Icon>
                <Text style={styles.buttonText}>Now</Text>
              </View>
            </View>
            <TouchableOpacity style={{marginRight: 20}}>
              <Icon name="tune" size={28} color={colors.grey2}></Icon>
            </TouchableOpacity>
          </View>
          <TextSeparator>Categories</TextSeparator>
          <View>
            <SmallItemPicker
              Data={Data}
              onPick={index => setCheckedIndex(index)}></SmallItemPicker>
          </View>
          <TextSeparator>Free delivery now</TextSeparator>
          <View>
            <FlatList
              horizontal={true}
              data={restaurantData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Card
                  image={item.image}
                  restaurant={item.restaurantName}
                  distance={item.distance}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReviews}
                  address={item.address}
                  screenWidth={SCREEN_WIDTH * 0.8}></Card>
              )}></FlatList>
          </View>

          <TextSeparator>Promotions avaliable</TextSeparator>

          <View>
            <FlatList
              horizontal={true}
              data={restaurantData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Card
                  image={item.image}
                  restaurant={item.restaurantName}
                  distance={item.distance}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReviews}
                  address={item.address}
                  screenWidth={SCREEN_WIDTH * 0.8}></Card>
              )}></FlatList>
          </View>

          <TextSeparator>Restaurants in your area</TextSeparator>

          <View>
            <FlatList
              horizontal={true}
              data={restaurantData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Card
                  image={item.image}
                  restaurant={item.restaurantName}
                  distance={item.distance}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReviews}
                  address={item.address}
                  screenWidth={SCREEN_WIDTH * 0.8}></Card>
              )}></FlatList>
          </View>
        </ScrollView>

        <View style={styles.mapButtonContainer}>
          <TouchableOpacity
            style={styles.mapButton}
            onPress={() => navigation.navigate('RestaurantsMapScreen')}>
            <Icon name="map-marker" size={28} color={colors.button}></Icon>
            <Text style={{fontWeight: 'bold'}}>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: colors.black,
  },
  tabButton: {
    width: 100,
    height: 30,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey5,
    marginBottom: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  spaceTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.grey5,
    marginHorizontal: 20,
  },
  separator: {
    backgroundColor: colors.grey5,
    marginTop: 10,
  },
  separatorText: {
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 2,
  },
});
