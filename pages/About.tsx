import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

function About() {
    return (
        <View style={styles.container}>
            <Text onPress={() => Toast.show({text1 : 'dit me may', text2 : 'con cac', autoHide : true })}>Dit me may</Text>
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