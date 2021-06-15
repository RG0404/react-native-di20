import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text>Yoki</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Touchable */}     
        <TouchableOpacity 
        onPress={() => alert('Hello')} 
        style={styles.button}> 
            <Text>Scanner</Text>     
        </TouchableOpacity>
      </View>

      {/* Scroll */}
      <ScrollView>
        {
          items.map(el => {
            return (
              <View key={el.id} style={styles.articleContainer}>
                <Text style={sText.articleTitle}>{el.title}</Text>
                <Text style={sText.articleDesc}>{el.date}</Text>
              </View> 
            )
          })
        }
        
      </ScrollView>
      
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}
/* Ajout d'une nouvelle constante pour le texte */
const sText = StyleSheet.create({
  articleTitle: {
    fontSize: 24,
    marginBottom: 5
  },
  articleDesc: {
    fontSize: 16
  }
}) 

/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  articleContainer : {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    paddingVertical: 15
  },
  buttonContainer : {
    height: 100,
    borderBottomWidth: 1
  },
  button : {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'orange',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 60,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
