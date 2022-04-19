import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import { ScrollView } from 'react-native-gesture-handler';

export default function Pokemon(props) {
  const { navigation, route: { params }, } = props;
  const [pokemon, setPokemon] = useState(null)
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params]);

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        imagen={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
    </ScrollView>
  )
}