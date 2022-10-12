import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../pages/About';
import Index from '../pages/Index';

const Stack = createNativeStackNavigator();


function ApplicationRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Index' options={{ title: "Home" }} component={Index} />
        <Stack.Screen name='About' options={{ title: "About" }} component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationRouter
