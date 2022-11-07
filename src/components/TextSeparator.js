import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

export default function TextSeparator({children}) {
  return (
    <View style={styles.separator}>
      <Text style={styles.separatorText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
