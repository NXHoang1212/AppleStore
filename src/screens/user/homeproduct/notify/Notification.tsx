import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../../../import/IndexComponent'
import { IndexStyles } from '../../../../import/IndexStyles'
import { useGetNotificationQuery } from '../../../../service/Api/Index.Notification'

const Notification: React.FC = () => {
    return (
        <View style={IndexStyles.StyleNotification.container}>
            <View style={IndexStyles.StyleNotification.viewheader}>
                <View style={IndexStyles.StyleNotification.headerTitle}>
                    <CustomHeader title='Thông báo' />
                </View>
            </View>
        </View>
    )
}

export default Notification