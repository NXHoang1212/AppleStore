import { View, Text } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import { IndexStyles } from '../../../../import/IndexStyles';

const PendingConfirmation: React.FC = () => {
    return (
        <View style={IndexStyles.StylePendingConfirmation.container}>
            <Text>PendingConfirmation</Text>
        </View>
    )
}

export default PendingConfirmation