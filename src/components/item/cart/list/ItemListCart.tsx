import { View, Text, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { CartEntity } from '../../../../model/entity/IndexCart.entity'

import { Responsive } from '../../../../constant/Responsive'
import { COLOR } from '../../../../constant/Colors'

import { FormatPrice } from '../../../../utils/FormatPrice'
import { Icon } from '../../../../constant/Icon'

import { IndexStyles } from '../../../../import/IndexStyles'
import { useLazyGetProductsByIdQuery } from '../../../../service/Api/IndexProduct'

import ItemDetailUpdateArticle from '../detail/ItemDetailUpdateCart'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { useDeleteCartMutation } from '../../../../service/Api/IndexCart'
import ToastMessage from '../../../../utils/ToastMessage'


type PropsCart = {
    item: CartEntity,
    navigation: any,
    currentlyOpenSwipeable: any
}
const imageAnimated = new Animated.Value(0)

const ItemListCart = ({ item, navigation, currentlyOpenSwipeable }: PropsCart) => {
    const [show, setShow] = useState<boolean>(false);

    const [trigger, { data }] = useLazyGetProductsByIdQuery();

    const [itemCartDetail, setItemCartDetail] = useState<any>(null);

    const [deleteCart] = useDeleteCartMutation();

    const swipeableRef = useRef<Swipeable | null>(null);


    useEffect(() => {
        if (data) {
            setItemCartDetail(data.data[0]);
        }
    }, [data]);

    const handleSetShow = () => {
        if (item.products._id) {
            trigger(item.products._id);
            setShow(true);
        }
    };

    const onImageLoad = () => {
        Animated.timing(imageAnimated, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleDeleteCart = async () => {
        try {
            const res = await deleteCart(item._id);
            if (res.data) {
                ToastMessage('success', 'Xóa sản phẩm thành công');
            } else {
                ToastMessage('error', 'Xóa sản phẩm thất bại');
            }
        } catch (error) {
            console.log('handleDeleteCart error:', error);
        }
    }


    const renderRightActions = () => {
        return (
            <TouchableOpacity style={IndexStyles.StylesItemListCart.viewDelete} onPress={handleDeleteCart}>
                <Text style={IndexStyles.StylesItemListCart.textDelete}>Xóa</Text>
            </TouchableOpacity>
        );
    }

    const handleSwipeableOpen = () => {
        if (currentlyOpenSwipeable.current && currentlyOpenSwipeable.current !== swipeableRef.current) {
            currentlyOpenSwipeable.current.close();
        }
        currentlyOpenSwipeable.current = swipeableRef.current;
    };

    return (
        <Swipeable
            ref={swipeableRef}
            renderRightActions={renderRightActions}
            onSwipeableWillOpen={handleSwipeableOpen}
        >
            <TouchableOpacity style={IndexStyles.StylesItemListCart.container} onPress={() => navigation.navigate('StackMisc', { screen: 'DetailArticle', params: { _id: item.products._id } })}>
                <View style={IndexStyles.StylesItemListCart.viewImage}>
                    <Animated.Image
                        source={{ uri: item.products.priceColor.image as string }}
                        style={IndexStyles.StylesItemListCart.image}
                        onLoad={onImageLoad}
                    />
                </View>
                <View style={IndexStyles.StylesItemListCart.viewItem}>
                    <Text style={IndexStyles.StylesItemListCart.textNameProducts}>{item.products.name} {item.products.model} {item.products.storage}</Text>
                    <TouchableOpacity style={IndexStyles.StylesItemListCart.viewColor} onPress={handleSetShow}>
                        <Text style={IndexStyles.StylesItemListCart.textColorProducts}>{item.products.priceColor.color}</Text>
                        <Icon.DownSVG width={Responsive.wp(10)} height={Responsive.hp(5)} fill={'red'} />
                    </TouchableOpacity>
                    <Text style={IndexStyles.StylesItemListCart.textChangeProducts}>Đổi ý 7 ngày</Text>
                    <View style={IndexStyles.StylesItemListCart.viewRows}>
                        <Text style={IndexStyles.StylesItemListCart.textPriceProducts}>{FormatPrice(item.products.priceColor.price)}</Text>
                        <View style={IndexStyles.StylesItemListCart.viewQuantity}>
                            <TouchableOpacity>
                                <Icon.PlusSVG width={Responsive.wp(4)} height={Responsive.hp(5)} fill={COLOR.GREY} />
                            </TouchableOpacity>
                            <Text style={IndexStyles.StylesItemListCart.textQuantityProducts}>{item.quantity}</Text>
                            <TouchableOpacity>
                                <Icon.MinusSVG width={Responsive.wp(5)} height={Responsive.hp(5)} fill={COLOR.GREY} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {show && itemCartDetail &&
                <ItemDetailUpdateArticle 
                show={show} onDismiss={() => setShow(false)} item={itemCartDetail} />}
        </Swipeable>
    )
}

export defaul