import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsScreen from './assets/screens/Contacts'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='#44abee'/>
      <ContactsScreen />

      {/* Signature */}
      <Text style={{
        position: 'absolute',
        alignSelf: 'center',
        bottom: -270,
        color: '#fff',
        backgroundColor: '#000',
        padding: 10,
        width: '100%',
        textAlign: 'center'
      }}>
        David Placca - Codetrain Gen 14
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 30,
  },

});
