import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

function Forbidden() {
  return (
    <View>
        <Text>Forbidden</Text>
    </View>
  )
}

export default Forbidden
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});