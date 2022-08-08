import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';

function Index() {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text onPress={() => {navigation.navigate("About")}} >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
