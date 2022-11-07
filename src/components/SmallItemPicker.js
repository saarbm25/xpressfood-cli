import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';

export default function SmallItemPicker({Data, onPick}) {
  const [localCheckedIndex, setLocalCheckedIndex] = useState('0');

  return (
    <View>
      <View>
        <FlatList
          data={Data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          extraData={localCheckedIndex}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setLocalCheckedIndex(item.id);
                onPick(item.id);
              }}
              style={
                item.id === localCheckedIndex
                  ? styles.checkedSmallCardContainer
                  : styles.smallCardContainer
              }>
              <View style={styles.smallCardContent}>
                <Icon
                  style={
                    item.id === localCheckedIndex
                      ? styles.checkedSmallCardIcon
                      : styles.smallCardIcon
                  }
                  name={item.icon}
                  size={28}
                  color={colors.grey2}></Icon>
                <Text
                  style={
                    item.id === localCheckedIndex
                      ? styles.checkedSmallCardText
                      : styles.smallCardText
                  }>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
