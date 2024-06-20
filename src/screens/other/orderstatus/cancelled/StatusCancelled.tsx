import { View, Text } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import { IndexStyles } from '../../../../import/IndexStyles';


const StatusDelivered: React.FC = () => {

    return (
        <View style={IndexStyles.StyleStatusCancelled.container}>
            <Text>PendingConfirmation</Text>
        </View>
    )
}

export default StatusDelivered