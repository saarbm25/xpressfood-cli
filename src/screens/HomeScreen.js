import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../global/styles';

export default function HomeScreen({navigation}) {
  const [delivery, useDelivery] = useState(true);
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
});
