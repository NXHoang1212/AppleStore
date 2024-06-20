import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'

import { IndexStyles } from '../../../import/IndexStyles'
import { COLOR } from '../../../constant/Colors'

import { useRoute, useNavigation } from '@react-navigation/native'
import { useGetProductsByIdQuery } from '../../../service/Api/IndexProduct'
import { TypeDetailPoduct } from '../../../model/entity/IndexProduct.entity'

import { ItemDetailArticle } from '../../../import/IndexComponent'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import useStatusBarConfig from '../../../utils/UseStatusBarConfig'

const DetailArticle: React.FC = () => {
    useStatusBarConfig('dark-content', 'transparent', true)
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const route = useRoute<TypeDetailPoduct['route']>()
    const { _id } = route?.params
    const { data, error, isLoading } = useGetProductsByIdQuery(_id)

    if (isLoading) {
        return (
            <View style={IndexStyles.StyleDetailArticle.loading}>
                <ActivityIndicator size="large" color={COLOR.REDONE} />
            </View>
        )
    }

    return (
        <View style={IndexStyles.StyleDetailArticle.container}>
            {data?.data.map((item) => (
                <ItemDetailArticle item={item} navigation={navigation} key={item._id} />
            ))}
        </View>
    )
}

export default DetailArticle