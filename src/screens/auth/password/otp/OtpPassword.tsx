import { View, Text } from 'react-native'
import React from 'react'
import { IndexStyles } from '../../../../import/IndexStyles'
import { Icon } from '../../../../constant/Icon'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RouteParams = {
    name: string
}

const OtpPassword: React.FC = () => {
    useStatusBarConfig('dark-content', 'transparent', true)
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>()
    const { name } = route.params

    return (
        <View style={IndexStyles.StyleOtpPassword.container}>
            <View style={IndexStyles.StyleOtpPassword.containerHeader}>
                <View style={IndexStyles.StyleOtpPassword.viewHeader}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleOtpPassword.textHeader}>Nhập mã xác minh</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleOtpPassword.containerBody}>
                <View style={IndexStyles.StyleOtpPassword.viewname}>
                    <Text style={IndexStyles.StyleOtpPassword.textTitle}>Mã xác đã gửi đến Email vui lòng kiểm tra</Text>
                    <Text style={IndexStyles.StyleOtpPassword.textname}>{name}</Text>
                </View>
            </View>
        </View>
    )
}

export default OtpPassword