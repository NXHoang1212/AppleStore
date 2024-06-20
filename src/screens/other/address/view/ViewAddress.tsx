import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleViewAddRess } from './StyleViewAddress'
import { Icon } from '../../../../constant/Icon'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackIndividualParams } from '../../../../model/param/IndexStack.Param'
import { IndexStyles } from '../../../../import/IndexStyles';


const ViewAddress: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackIndividualParams, 'ViewAddRess'>>();
    return (
        <View style={IndexStyles.StyleViewAddRess.container}>
            <View style={IndexStyles.StyleViewAddRess.viewheader}>
                <View style={StyleViewAddRess.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleViewAddRess.textHeader}>Địa chỉ của tôi</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleViewAddRess.containerBody}>
                <TouchableOpacity style={StyleViewAddRess.moreAddress} onPress={() => navigation.navigate('MoreAddress')}>
                    <Icon.AddSVG width={30} height={30} fill='red' />
                    <Text style={IndexStyles.StyleViewAddRess.textMoreAddress}>Thêm địa chỉ mới</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewAddress