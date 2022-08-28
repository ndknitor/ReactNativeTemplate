import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

function About() {
    return (
        <View style={styles.container}>
            <Text onPress={() => Toast.show({text1 : 'title', text2 : 'This is toast'}) }>About</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});