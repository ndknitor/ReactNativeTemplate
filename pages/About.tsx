import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
interface Props
{

}
function About(props:Props) {
    return (
        <View style={styles.container}>
            <Text>Dit me may</Text>
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