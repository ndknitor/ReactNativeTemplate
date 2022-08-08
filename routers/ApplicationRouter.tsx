import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import About from '../pages/About';
import Index from '../pages/Index';

const Stack = createNativeStackNavigator();

export interface ScreenParams {
  Index: undefined,
  About: undefined
}

function ApplicationRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Index' options={{ title: "Home" }} component={Index} />
        <Stack.Screen name='About' options={{ title: "Dit me may" }} component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationRouter
