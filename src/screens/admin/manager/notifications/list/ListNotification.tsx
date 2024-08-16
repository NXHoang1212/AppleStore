import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import StyleListNotification from './StyleListNotification'

import { CustomHeader, ItemAdminListNotification } from '../../../../../import/IndexComponent'

import { FlashList } from '@shopify/flash-list'
import { COLOR } from '../../../../../constant/Colors'
import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useStatusBarConfig from '../../../../../utils/UseStatusBarConfig'
import { Icon } from '../../../../../constant/Icon'

import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListNotifications: React.FC = () => {

    useStatusBarConfig('dark-content', 'transparent', true)

    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const currentlyOpenSwipeable = useRef<Swipeable | null>(null);


    return (
        <View style={StyleListNotification.container}>
            <View style={StyleListNotification.viewheader}>
                <View style={StyleListNotification.headerTitle}>
                    <CustomHeader title='Danh sách thông báo' color='red' />
                    <TouchableOpacity onPress={() => navigation.navigate('StackAdminManagerProduct', { screen: 'SendNotifications' })}>
                        <Icon.PlusSVG width={20} height={20} fill={COLOR.REDONE} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={StyleListNotification.containerBody}>

            </View>
        </View>
    )
}

export default ListNotifications