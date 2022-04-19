import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Account' component={AccountNavigation} options={{
                tabBarLabel: "Cuenta",
                tabBarIcon: ({ color, size }) => (<Icon name='user' color={color} size={size} />)
            }} />
            <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused }) => renderPokeball(focused)
            }} />
            <Tab.Screen name='Favorites' component={FavoriteNavigation} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color, size }) => (<Icon name='heart' color={color} size={size} />)
            }} />
        </Tab.Navigator>
    )
}

function renderPokeball(focused) {
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{ width: focused ? 100 : 75, height: focused ? 100 : 75, top: -15 }}
        />
    );
}