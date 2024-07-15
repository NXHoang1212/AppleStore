import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IndexStyles } from '../../import/IndexStyles'
import { Icon } from '../../constant/Icon'
import { COLOR } from '../../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const PaymentOrders = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    return (
        <View style={IndexStyles.StylePaymentOrders.container}>
            <View style={IndexStyles.StylePaymentOrders.viewheader}>
                <View style={IndexStyles.StylePaymentOrders.headerTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon.BackSVG width={28} height={28} fill={COLOR.REDONE} />
                    </TouchableOpacity>
                    <Text style={IndexStyles.StylePaymentOrders.textHeader}>Thanh toán</Text>
                </View>
            </View>
            <View style={IndexStyles.StylePaymentOrders.containerBody}>

            </View>
        </View>
    )
}

export default PaymentOrders