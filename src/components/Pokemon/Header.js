import { SafeAreaView, Text, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';


export default function Header(props) {
    console.log(props);
    const { name, order, type, imagen } = props;
    const color = getColorByPokemonType(type);
    const bgStyle = [{
        backgroundColor: color,
        ...styles.bg,
    }]
    return (
        <View>
            <View style={bgStyle}>
                <SafeAreaView>
                    <View style={styles.contentImg}>
                        <Image source={{ url: imagen }} style={styles.image} />
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,

    },
    image: {
        width: 250,
        height: 250
    },
    bg: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]

    }
})