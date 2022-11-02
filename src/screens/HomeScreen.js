import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../global/styles';
import {Data} from '../global/Data';
import {color} from '@rneui/base';

export default function HomeScreen({navigation}) {
  const [delivery, useDelivery] = useState(true);
  const [indexCheck, useIndexCheck] = useState('0');

  const setDelivery = () => {
    useDelivery(true);
  };
  const setPickUp = () => {
    useDelivery(false);
  };

  return (
    <View>
      <Header title="XpressFood" icon="menu" cart={true}></Header>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View style={styles.tabButtonContainer}>
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

        <View style={styles.separator}>
          <Text style={styles.separatorText}>Categories</Text>
        </View>

        <View>
          <FlatList
            data={Data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => useIndexCheck(item.id)}
                style={
                  item.id === indexCheck
                    ? styles.checkedSmallCardContainer
                    : styles.smallCardContainer
                }>
                <View style={styles.smallCardContent}>
                  <Icon
                    style={
                      item.id === indexCheck
                        ? styles.checkedSmallCardIcon
                        : styles.smallCardIcon
                    }
                    name={item.icon}
                    size={28}
                    color={colors.grey2}></Icon>
                  <Text
                    style={
                      item.id === indexCheck
                        ? styles.checkedSmallCardText
                        : styles.smallCardText
                    }>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  smallCardContainer: {
    height: 100,
    width: 85,
    margin: 5,
    backgroundColor: colors.grey5,
    borderRadius: 30,
  },
  checkedSmallCardContainer: {
    height: 100,
    width: 85,
    margin: 5,
    backgroundColor: colors.button,
    borderRadius: 30,
  },
  smallCardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.blue,
  },
  smallCardIcon: {
    backgroundColor: colors.white,
    borderRadius: 100,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedSmallCardIcon: {
    backgroundColor: colors.white,
    borderRadius: 100,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.button,
  },
  smallCardText: {
    fontWeight: 'bold',
  },
  checkedSmallCardText: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
