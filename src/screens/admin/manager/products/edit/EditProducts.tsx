import { View, Text } from 'react-native'
import React from 'react'
import StyleEditProducts from './StyleEditProducts'
import { CustomHeader } from '../../../../../import/IndexComponent'

import { useRoute, useNavigation, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useGetProductsByIdQuery } from '../../../../../service/Api/IndexProduct'

const EditProducts: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const route = useRoute<RouteProp<{ route: any }, 'route'>>()

    const { data, isLoading } = useGetProductsByIdQuery(route.params?.id)

    return (
        <View style={StyleEditProducts.viewheader}>
            <View style={StyleEditProducts.headerTitle}>
                <CustomHeader title='Cập nhật sản phẩm' color='red' />
            </View>
        </View>
    )
}

export default EditProducts