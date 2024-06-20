import { View, Text } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import { IndexStyles } from '../../../../import/IndexStyles';


const PendingDelivery: React.FC = () => {

    return (
        <View style={IndexStyles.StylePendingDelivery.container}>
            <Text>PendingConfirmation</Text>
        </View>
    )
}

export default PendingDelivery