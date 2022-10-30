import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './pages/About';
import Forbidden from './pages/Forbidden';
import Index from './pages/Index';
import Render from './pages/Render';
import Unauthorized from './pages/Unauthorized';
import Layout from './shared/component/Layout';
import useInit from './shared/context/hooks/useInit';

const Stack = createNativeStackNavigator();

function Routers() {
  useInit();
  return (

    <NavigationContainer >
      <Layout>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"Index"}>{() => <Index />}</Stack.Screen>
          <Stack.Screen name={"About"}>{() => <About />}</Stack.Screen>
          <Stack.Screen name={"Render"}>{() => <Render />}</Stack.Screen>

          <Stack.Screen name={"Unauthorized"}>{() => <Unauthorized />}</Stack.Screen>
          <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  )
}

export default Routers
