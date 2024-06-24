import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../redux/ReduxHook'
import { AddressType, CreateAddressEntity, TypeEditAddressParmas, UpdateAddressEntity } from '../../model/entity/IndexAddress.entity'
import { useCreateAddressMutation, useGetAddressIdQuery, useGetAddressIdUserQuery } from '../../service/Api/IndexAddress'
import { useRoute } from '@react-navigation/native'


const UseAddress = () => {
    const user = useAppSelector(state => state.Auth.user._id)
    const [addressType, setAddressType] = useState<AddressType>(AddressType.HOME)
    const [createAddress] = useCreateAddressMutation()
    const route = useRoute<TypeEditAddressParmas['route']>()
    const [data, setData] = useState<CreateAddressEntity>({
        user_id: user,
        houseNumber: '',
        name: '',
        province: '',
        district: '',
        ward: '',
        phone: '',
        addressType: '',
        isDefault: false
    })


    return {
        user, addressType, setAddressType, createAddress,
        data, setData
    }
}

export default UseAddress