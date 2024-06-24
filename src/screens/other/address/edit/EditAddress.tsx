import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { Icon } from '../../../../constant/Icon'
import { IndexStyles } from '../../../../import/IndexStyles'

import { useRoute } from '@react-navigation/native'
import { AddressType, TypeEditAddressParmas } from '../../../../model/entity/IndexAddress.entity'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CustomSwtich, InputCustom } from '../../../../import/IndexComponent'

import { useAppSelector, useAppDispatch } from '../../../../import/IndexFeatures'
import { setAddressFromParams, setUpdate } from '../../../../redux/slices/Address.Slice'
import { useUpdateAddressMutation, useDeleteAddressMutation } from '../../../../service/Api/IndexAddress'


const EditAddress: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const route = useRoute<TypeEditAddressParmas['route']>()
    const { _id, province, ward, district } = route?.params || {}
    const update = useAppSelector(state => state.Address)
    const dispatch = useAppDispatch()
    const [updateAddress] = useUpdateAddressMutation()
    const [deleteAddress] = useDeleteAddressMutation()


    useEffect(() => {
        if (province && district && ward) {
            dispatch(setAddressFromParams({ province, district, ward }));
        }
    }, [province, district, ward])

    if (update.isLoading) { 
        return (
            <View style={IndexStyles.StyleEditAddress.loadingContainer}>
                <ActivityIndicator size='large' color='red' />
            </View>
        )
    }

    return (
        <View style={IndexStyles.StyleEditAddress.container}>
            <View style={IndexStyles.StyleEditAddress.viewheader}>
                <View style={IndexStyles.StyleEditAddress.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleEditAddress.textHeader}>Thay đổi địa chỉ của bạn</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleEditAddress.viewinput}>
                <Text style={IndexStyles.StyleEditAddress.textinput}>Liên hệ</Text>
                <InputCustom
                    placeholder='Họ và tên'
                    placeholderTextColor='gray'
                    value={update.update.name}
                    style={IndexStyles.StyleEditAddress.input1}
                    keyboardType='default'
                />
                <InputCustom
                    placeholder='Số điện thoại'
                    placeholderTextColor='gray'
                    value={update.update.phone}
                    style={IndexStyles.StyleEditAddress.input2}
                    keyboardType='numeric'
                />
            </View>
            <View style={IndexStyles.StyleEditAddress.viewinput}>
                <Text style={IndexStyles.StyleEditAddress.textinput}>Địa chỉ</Text>
                <TouchableOpacity style={IndexStyles.StyleEditAddress.viewchooseAddress} onPress={() => navigation.navigate('ChooseAddress', { previousScreen: 'EditAddress' })}>
                    <View>
                        <Text style={IndexStyles.StyleEditAddress.textchooseAddress}>
                            {update.update.province}
                        </Text>
                        <Text style={IndexStyles.StyleEditAddress.textchooseAddress}>
                            {update.update.district}
                        </Text>
                        <Text style={IndexStyles.StyleEditAddress.textchooseAddress}>
                            {update.update.ward}
                        </Text>
                    </View>

                    <Image source={Icon.RIGHT} style={IndexStyles.StyleEditAddress.iconright} />
                </TouchableOpacity>
                <InputCustom
                    placeholder='Tên đường, số nhà'
                    placeholderTextColor='gray'
                    value={update.update.houseNumber}
                    style={IndexStyles.StyleEditAddress.input2}
                    keyboardType='default'
                />
            </View>
            <View style={IndexStyles.StyleEditAddress.containerSetting}>
                <Text style={IndexStyles.StyleEditAddress.textinput}>Cài đặt</Text>
                <View style={IndexStyles.StyleEditAddress.containerViewtext}>
                    <Text style={IndexStyles.StyleEditAddress.textsetting}>Loại địa chỉ:</Text>
                    <TouchableOpacity style={[IndexStyles.StyleEditAddress.viewhome, update.update.addressType === AddressType.HOME ? IndexStyles.StyleEditAddress.selected : null]}
                    >
                        <Text style={[IndexStyles.StyleEditAddress.textoptions, update.update.addressType === AddressType.HOME ? IndexStyles.StyleEditAddress.selectedText : null]}>
                            Nhà Riêng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[IndexStyles.StyleEditAddress.viewoffice, update.update.addressType === AddressType.OFFICE ? IndexStyles.StyleEditAddress.selected : null]}
                    >
                        <Text style={[IndexStyles.StyleEditAddress.textoptions, update.update.addressType === AddressType.OFFICE ? IndexStyles.StyleEditAddress.selectedText : null]}>
                            Văn Phòng
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={IndexStyles.StyleEditAddress.containerViewdefault}>
                    <Text style={IndexStyles.StyleEditAddress.textsetting}>Đặt làm địa chỉ mặc định</Text>
                    <CustomSwtich value={update.update.isDefault} onChange={() => { }} />
                </View>
            </View>
            <View style={IndexStyles.StyleEditAddress.containerButton}>
                <TouchableOpacity style={IndexStyles.StyleEditAddress.viewDelete}>
                    <Text style={IndexStyles.StyleEditAddress.textDelete}>Xóa địa chỉ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IndexStyles.StyleEditAddress.viewbutton}>
                    <Text style={IndexStyles.StyleEditAddress.textbutton}>Hoàn thành</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditAddress