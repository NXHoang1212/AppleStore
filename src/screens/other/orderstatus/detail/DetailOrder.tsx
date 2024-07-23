import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../../../import/IndexComponent'
import { IndexStyles } from '../../../../import/IndexStyles'
import { useRoute, RouteProp } from '@react-navigation/native'
import { useGetDetailOrderQuery } from '../../../../service/Api/Index.Order'

type RootStackParamList = {
    DetailOrder: { id: string }
}

const DetailOrder: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'DetailOrder'>>()
    const { id } = route.params
    const { data, error, isLoading } = useGetDetailOrderQuery(id)

    return (
        <View style={IndexStyles.StyleDetailOrder.container}>
            <View style={IndexStyles.StyleDetailOrder.viewheader}>
                <View style={IndexStyles.StyleDetailOrder.headerTitle}>
                    <CustomHeader title='Thông tin đơn hàng' color='red' />
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

export default DetailOrder