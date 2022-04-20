import React, { useState, useEffect } from 'react';
import { getPokemonDetailsApi } from '../api/pokemon';
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from '../components/Pokemon/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';

export default function Pokemon(props) {
  const { navigation, route: { params }, } = props;
  const [pokemon, setPokemon] = useState(null)
  console.log(params.id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

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
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}