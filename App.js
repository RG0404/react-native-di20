import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import Home from './pages/Home';
import DemoState from './pages/DemoState';
import LoremPicsum from './pages/LoremPicsum';
import Login from './pages/Login';
import Header from './components/Header';
export default function App() {

  const [page, navigate] = useState('Home');

  /* Ajout de variables avant le return */
  const items = [
    { id: 1,
      title: 'Canette soda test',
      date: 'Demain à 00:00'
    },
    { id: 2,
      title: 'Canette soda test 2',
      date: 'Demain à 00:00'
    },
    { id: 3,
      title: 'Cookies du crous ',
      date: 'Demain à 00:00'
    },
    { id: 4,
      title: 'Pizza',
      date: 'Demain à 00:00'
    },
    { id: 5,
      title: 'Bière',
      date: 'Demain à 00:00'
    },
  ]


  function onScanPress(){
    /* TOOD: Ouvrir une page pour l'appareil photo */
  }

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* Header */}
        <Header title="Homepage"/>

        {/* TODO: Ajouter navigation */}
        {page === 'Home' && <Home appScan={onScanPress} appItems={items}/>}
        {page === 'DemoState' &&  <DemoState/>}
        {page === 'LoremPicsum' &&  <LoremPicsum/>}
        {page === 'Login' &&  <Login login={() => {alert('Je suis connecté !'); navigate('Home')}}/>}
      

        <View style={styles.topMenu}>
          <Button 
            title="Home" 
            color={page === "Home" ? "green" : 'grey'}
            onPress={() => navigate('Home')}
            />
          <Button 
            title="State" 
            color={page === "DemoState" ? "green" : 'grey'}
            onPress={() => navigate('DemoState')}
            />

          <Button 
            title="Picsum" 
            color={page === "LoremPicsum" ? 'green' : 'grey'}
            onPress={() => navigate('LoremPicsum')}
            />

          <Button 
            title="Login" 
            color={page === "Login" ? 'green' : 'grey'}
            onPress={() => navigate('Login')}
            />
        </View>

    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
