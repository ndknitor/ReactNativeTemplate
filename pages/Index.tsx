import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';

function Index() {
  const { navigate } = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text onPress={() => { navigate("About") }} >Click here to navigate to about page</Text>
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
