import React from 'react';
import { View, Text, StyleSheet, Dimentions, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, parameters } from '../global/styles' 

function Header({title, icon}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
              <Icon name={icon} size={28} color={colors.white}></Icon>
            </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight,
        alignItems: 'center',
        paddingLeft: 10,
    },
    headerText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 30,
    }
})

export default Header;