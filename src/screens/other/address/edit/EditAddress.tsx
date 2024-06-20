import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../../../../constant/Icon'
import { IndexStyles } from '../../../../import/IndexStyles'

const EditAddress: React.FC = () => {
    const navigation = useNavigation()
    return (
        <View style={IndexStyles.StyleEditAddress.container}>
            <View style={IndexStyles.StyleEditAddress.viewheader}>
                <View style={IndexStyles.StyleEditAddress.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleEditAddress.textHeader}>Thay đổi địa chỉ của bạn</Text>
                </View>
            </View>
        </View>
    )
}

export default EditAddress