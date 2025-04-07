import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigations from './navigation/StackNavigations'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
   <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <StackNavigations/>
    </NavigationContainer>
   </SafeAreaView>
   </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffff',
    flex:1,
  },
})