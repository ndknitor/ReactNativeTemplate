import React from 'react'
import { View, Text } from 'react-native'
import Authorize from '../shared/boiler/Authorize'

function Render() {
    return (
        <Authorize roles={["User"]}>
            <View>
                <Text>Render</Text>
            </View>
        </Authorize>
    )
}

export default Render