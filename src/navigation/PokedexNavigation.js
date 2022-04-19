import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokedexScreen from '../screens/Pokedex'

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Favorites' component={PokedexScreen} options={{
                title: "Pokedex"
            }} />
        </Stack.Navigator>
    )
}