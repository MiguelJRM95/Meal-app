import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import { Ionicons } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import { Platform } from "react-native";

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitleAlign: 'center'
    }
}
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, defaultStackNavOptions);

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitle: 'Favorites'
        }
    },
    MealDetail: MealDetailScreen
}, defaultStackNavOptions)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Categories',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            // tabBarLabel: <Text>Meals</Text>
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
}


const MealsFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            labeled: false,
            shifting: true,
            // barStyle: {
            //     backgroundColor: 'black'
            // }
        }) 
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                // labelStyle: {
                //     fontFamily: 'open-sans'
                // },
                activeTintColor: Colors.accentColor,
                shifting: true,
                showLabel: false
            }
        });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        drawerLabel: 'Filters'
    },
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        itemsContainerStyle: {
            paddingTop: '20%'
        }
    }
});

export default createAppContainer(MainNavigator);