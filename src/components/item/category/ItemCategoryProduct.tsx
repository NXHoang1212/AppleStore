import { View, Text, StyleSheet, Image, ImageProps, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'
import { CategoryState } from '../../../model/entity/IndexCategory.entity'
import { Responsive } from '../../../constant/Responsive'
import { FontsROBOTO } from '../../../constant/Fonts'
import { COLOR } from '../../../constant/Colors'


type PropsCategory = {
    item: CategoryState
}

const ItemCategoryProduct = ({ item }: PropsCategory) => {
    return (
        <TouchableOpacity style={styles.product1}>
            <Image source={{ uri: item.images as string }} style={styles.imgproduct} />
            <Text style={styles.textproduct}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default ItemCategoryProduct

const styles = StyleSheet.create({
    product1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgproduct: {
        width: Responsive.wp(45),
        height: Responsive.hp(20),
        resizeMode: 'contain',
    },
    textproduct: {
        fontFamily: FontsROBOTO.ROBOTO_BOLD,
        fontSize: 18,
        color: COLOR.REDONE,
    },
})