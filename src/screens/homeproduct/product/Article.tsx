import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

import { Icon } from '../../../constant/Icon'
import { IndexStyles } from '../../../import/IndexStyles'
import { COLOR } from '../../../constant/Colors'

import useStatusBarConfig from '../../../utils/UseStatusBarConfig'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAppSelector, useAppDispatch } from '../../../import/IndexFeatures'

import { FlashList } from '@shopify/flash-list'

import ItemArticle from '../../../components/item/product/list/ItemArticle'
import { fetProductsPagination } from '../../../service/Api/IndexProduct'
import { TypeNameProductParams } from '../../../model/entity/IndexProduct.entity'


const Article: React.FC = () => {
    useStatusBarConfig('dark-content', 'transparent', true)
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const route = useRoute<TypeNameProductParams['route']>()
    const { name } = route.params
    const data = useAppSelector(state => state.ProductPagination)
    
    const handleOnReached = () => {
        if (!data.loading) {
            dispatch(fetProductsPagination({ page: data.nextPage, limit: 10 }));
        }
        console.log(data.nextPage)
    };

    const renderFooter = () => {
        if (!data.loading) return null;
        return (
            <View style={IndexStyles.StyleArticle.loading}>
                <ActivityIndicator size="large" color={COLOR.REDONE} />
            </View>
        );
    };

    return (
        <View style={IndexStyles.StyleArticle.container}>
            <View style={IndexStyles.StyleArticle.headerContainer}>
                <View style={IndexStyles.StyleArticle.viewHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon.BackSVG width={25} height={25} fill={COLOR.WHITE} />
                    </TouchableOpacity>
                    <Text style={IndexStyles.StyleArticle.textHeader}>Sản phẩm nổi bật</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleArticle.containerBody}>
                <FlashList
                    data={data.data.filter(item => item.category.name === name)}
                    renderItem={({ item }) => <ItemArticle item={item} navigation={navigation} />}
                    keyExtractor={(item) => item._id}
                    horizontal={false}
                    numColumns={2}
                    estimatedItemSize={500}
                    showsVerticalScrollIndicator={false}
                    onEndReached={handleOnReached}
                    ListFooterComponent={renderFooter}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    )
}

export default Article