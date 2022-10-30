import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import StandardResponse from '../objects/response/StandardResponse';
import useNavigate from '../shared/hook/useNavigate';

function About() {
    const { getState } = useNavigate();
    const [response, setResponse] = useState<StandardResponse>();
    useEffect(() => {
        const a = getState();
        const response = a.routes[a.index].params as StandardResponse;
        setResponse(response);
    }, []);

    return (
        <View style={styles.container}>
            <Text onPress={() => Toast.show({ text1: 'title', text2: 'This is toast' })}>{response?.message}</Text>
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