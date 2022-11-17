import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SearchComponent from '../components/SearchComponent';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchTerm} from '../redux/actions';

export default function SearchScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <SearchComponent
        reduxSetter={value => {
          dispatch(setSearchTerm(value));
        }}></SearchComponent>
    </View>
  );
}

const styles = StyleSheet.create({});
