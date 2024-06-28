import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

import LottieView from 'lottie-react-native'
import { Lottie, Icon } from '../../constant/Icon'

import { Responsive } from '../../constant/Responsive'
import { FontsROBOTO } from '../../constant/Fonts'
import { COLOR } from '../../constant/Colors'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackHomeTypeParam } from '../../model/param/IndexStack.Param'

import { useAppDispatch } from '../../import/IndexFeatures'
import { fetchCategoryProduct } from '../../service/Api/IndexCategory'
import { fetchBannerProduct } from '../../service/Api/IndexBanner'
import { fetchProducts, fetProductsPagination } from '../../service/Api/IndexProduct'

const Slash: React.FC = () => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState<boolean>(true)
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeTypeParam>>();

    useEffect(() => {
        dispatch(fetchBannerProduct())
        dispatch(fetProductsPagination({ page: 1, limit: 10 }))
        dispatch(fetchProducts());
        dispatch(fetchCategoryProduct())
        setTimeout(() => {
            setLoading(false)
            navigation.replace('TabHome')
        }, 1500)

        
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.WHITE} barStyle='dark-content' />
            <View style={styles.logoContainer}>
                <Icon.LogoAppleSVG width={250} height={120} />
                <Text style={styles.logoText}>Apple Store</Text>
            </View>
            <LottieView
                source={Lottie.Loading}
                style={styles.lottie}
                autoPlay
                loop={loading}
            />
        </View>
    )
}

export default Slash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        top: Responsive.hp(7)
    },
    logoText: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: FontsROBOTO.ROBOTO_BLACK_ITALIC,
        color: COLOR.PRIMARY,
    },
    lottie: {
        width: Responsive.wp(60),
        height: Responsive.hp(23),
    }
});