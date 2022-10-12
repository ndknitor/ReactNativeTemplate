import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import appxios from '../shared/boiler/AxiosInterceptor';
import useNavigate from '../shared/hook/useNavigate';

function Index() {
  const { navigate } = useNavigate();
  return (
    <View style={styles.container}>
      <Text onPress={() => { navigate("About") } } >Click here to navigate to about page</Text>
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
