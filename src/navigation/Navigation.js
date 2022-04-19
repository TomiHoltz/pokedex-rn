import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from '../screens/Account';
import PokedexScreen from '../screens/Pokedex';
import FavoritesScreen from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Account' component={AccountScreen}/>
        <Tab.Screen name='Favorites' component={PokedexScreen}/>
        <Tab.Screen name='Pokedex' component={FavoritesScreen}/>
    </Tab.Navigator>
  )
}