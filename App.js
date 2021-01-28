import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CatItem from './component/CatItem/index';

export default function App() {
  return (
    <View style={styles.container}>

      <CatItem 
        name={"Model 3"}
        tagline={"Order Online For"}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/Model3.png')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
