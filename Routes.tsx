import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRef } from 'react';
import About from './pages/About';
import Forbidden from './pages/Forbidden';
import Index from './pages/Index';
import Unauthorized from './pages/Unauthorized';
import Footer from './shared/component/Footer';
import Header from './shared/component/Header';
import Layout from './shared/component/Layout';
import useInit from './shared/context/hooks/useInit';

const Stack = createNativeStackNavigator();
const Screens =
  [
    <Index />,
    <About />,
    <Unauthorized />
  ];

function Routers() {
  useInit();
  return (
    // <NavigationContainer>
    //   <Header/>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     {
    //       Screens.map(item => <Stack.Screen name={item.type.name}>{() => item}</Stack.Screen>)
    //     }
    //   </Stack.Navigator>
    //   <Footer />
    // </NavigationContainer>
    <NavigationContainer >
      <Layout>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"Index"}>{() => <Index />}</Stack.Screen>
          <Stack.Screen name={"About"}>{() => <About />}</Stack.Screen>
          <Stack.Screen name={"Unauthorized"}>{() => <Unauthorized />}</Stack.Screen>
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  )
}

export default Routers
