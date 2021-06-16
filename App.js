import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import Home from './pages/Home';

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
    /* TOOD: Ouvrir une page pour l'appareil photo */
  }

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        {/* TODO: Ajouter navigation */}

      <Home appScan={onScanPress} appItems={items}/>
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
