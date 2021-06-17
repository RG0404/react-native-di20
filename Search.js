import React, { useState } from 'react';
import {Text, TextInput, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'

export default function Search(){

    const [text, onChangeText] = useState('');
    const [url, setUrl] = useState('');
    const APIkey = '9c447331721975455c6d50b9b4d88867';
    

    function iClick() {
        let _url = 'api.openweathermap.org/data/2.5/weather?q=' + text + '&appid=' + APIkey + '.json';
        setUrl(_url)
    }

    
    return (
        <View style={ styles.container }>

            <TextInput style={ styles.input }
                onChangeText={onChangeText}
                value={text}
            />

            <View onPress={iClick} style={ styles.buttonBox }>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }>Voir la météo</Text>
                </TouchableOpacity>
            </View>

            {
                text === '' ? (
                    <Text style={ styles.container }>Veuillez renseigner une ville</Text>
                ) : (
                    <ScrollView>

                        <Text>Météo à { text }</Text>

                    </ScrollView>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 45,
        margin: 8,
        borderColor: 'royalblue',
        borderWidth: 1
    },
    buttonBox: {
        width: 250,
        height: 45,
        margin: 8,
    },
    container: {
        flex: 1
    },
    button: {
        backgroundColor: 'royalblue',
        height: 45,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
})