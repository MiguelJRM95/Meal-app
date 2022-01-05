import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability} 
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName: 'MealDetail', params: {
                            mealId: itemData.item.id,
                            mealTitle:  itemData.item.title
                        }   
                    })
                }}
            />
        )
    };

    return (
        <View style={styles.screen}>
            <FlatList 
                data={props.listData}
                keyExtractor={(item,index) => item.id}
                renderItem={renderMealItem}
                style={{width: '95%'}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});

export default MealList;