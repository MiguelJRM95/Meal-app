import React from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";
import HeaderButton from '../components/HeaderButton';



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return( 
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color} 
                onSelect={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id
                    }});
                }} 
            />);
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} 
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

// CategoriesScreen.navigationOptions = {
//     headerTitle: 'Meal Categories',
//     headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
//     },
//     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
//     headerTitleAlign: 'center'
// };

CategoriesScreen.navigationOptions = navData => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});

export default CategoriesScreen;