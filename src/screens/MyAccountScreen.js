import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function MyAccountScreen() {
  const {email, password} = useSelector(state => state.userReducer);
  const { term } = useSelector(state => state.searchReducer);
  const {category} = useSelector(state => state.categoryReducer);

  return (
    <View>
      <Text>email using redux: {email}</Text>
      <Text>password using redux: {password}</Text>
      <Text>search term using redux: {term}</Text>
      <Text>selected category using redux: {category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
