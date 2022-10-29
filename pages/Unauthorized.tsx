import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Unauthorized() {
    return (
        <View style={styles.container}>
            <Text>Unauthorized</Text>
        </View>
    )
}

export default Unauthorized
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
