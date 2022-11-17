import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/styles';
import SearchBar from './SearchBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Data } from '../global/Data';
import {useSelector} from 'react-redux';

export default function SearchComponent({reduxSetter}) {
  const [searchVisable, setSearchVisable] = useState(false);
  const {searchTerm} = useSelector(state => state.searchReducer);
  const changeVisable = () => {
    setSearchVisable(!searchVisable);
  };
  const onChange = text => {
    let filtered = Data.filter(item => item.name.includes(text));
    setFilteredData(filtered);
    reduxSetter(text);
  };
  const [filteredData, setFilteredData] = useState(Data);

  return (
    <View>
      <SearchBar
        textValue={searchTerm}
        onFocusChanged={changeVisable}
        onChange={onChange}></SearchBar>
      <View>
        {searchVisable && (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.searchItem}
                onPress={() => reduxSetter(item.name)}>
                <Text style={styles.searchItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}></FlatList>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    marginHorizontal: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: colors.grey3,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  secure: {
    paddingRight: 10,
  },
  searchItem: {
    margin: 10,
  },
  searchItemText: {
    fontSize: 16,
    color: colors.grey3,
    fontWeight: 'bold',
  },
});
