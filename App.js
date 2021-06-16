import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import BigText from './components/BigText';
import Header from './components/Header';
import ScanButtonView from './components/ScanButtonView';
import ProductsHistory from './components/ProductsHistory';

export default function App() {

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
    alert('Alert depuis App.js');

    /* TOOD: Ouvrir une page pour l'appareil photo */
  }

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="Homepage"/>
{/* 
      <BigText fontSize={22}  />
      <BigText fontSize={32} text="Bonjour je m'appelle Toto"/>
      <BigText fontSize={42} text="Bonjour je m'appelle Tata"/>
 */}
      <ScanButtonView handleScanPress={onScanPress} />

      <ProductsHistory propsItem={items}/>
      
      <StatusBar style="auto" />

      {/* TODO: Ajouter navigation */}
      
    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
