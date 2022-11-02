import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimentions, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon as IconWithBadge ,withBadge} from '@rneui/base'

import { colors, parameters } from '../global/styles' 

function Header({ title, icon, onPress, cart }) {
    
    const [count, setCount] = useState(0)
    const BadgeIcon = withBadge(count)(IconWithBadge)

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
              <Icon name={icon} size={28} color={colors.white}></Icon>
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
            {cart && 
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <BadgeIcon name='shopping-cart' size={28} color={colors.white}></BadgeIcon>
                </TouchableOpacity>}

            </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight,
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 10,
    },
    headerText: {
        justifyContent: 'center',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 22,
    }
})

export default Header;