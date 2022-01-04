import React from "react";
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet } from "react-native";
import Colors from '../constants/Colors'

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={Ionicons} 
            iconSize={23} 
            color={Platform.OS === 'android' ? 'white'  : Colors.primaryColor } 
        />
    )
}

const style = StyleSheet.create({

})

export default CustomHeaderButton;