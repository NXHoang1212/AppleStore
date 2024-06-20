import { View, Text } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import { IndexStyles } from '../../../../import/IndexStyles';


const StatusCancelled: React.FC = () => {

    return (
        <View style={IndexStyles.StyleStatusDelivered.container}>
            <Text>PendingConfirmation</Text>
        </View>
    )
}

export default StatusCancelled