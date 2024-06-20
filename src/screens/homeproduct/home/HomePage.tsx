import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, Linking, FlatList } from 'react-native'
import React, { useState, useRef } from 'react'
import { Icon } from '../../../constant/Icon';

import LinearGradient from 'react-native-linear-gradient';
import useStatusBarConfig from '../../../utils/UseStatusBarConfig'

import { useFocusEffect, useNavigation, useScrollToTop } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeTypeParam } from '../../../model/param/IndexStack.Param'

import { useAppSelector, useAppDispatch } from '../../../features/redux/ReduxHook'
import { IndexStyles } from '../../../import/IndexStyles';

import BannerSlider from '../../../components/banner/Advertisement';

import { FlashList } from '@shopify/flash-list';
import { ItemProductHomePage } from '../../../import/IndexComponent';

import { Loading } from '../../../import/IndexComponent';


const HomePage: React.FC = () => {
    useStatusBarConfig('dark-content', 'transparent', true)
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeTypeParam, 'AuthUser'>>()
    const scrollRef = useRef<ScrollView>(null)
    useScrollToTop(scrollRef)
    const user = useAppSelector(state => state.Auth)
    const product = useAppSelector(state => state.Product)

    if (product.error) {
        return <Loading loading={product.loading} />
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} ref={scrollRef}>
            <View style={IndexStyles.StylesHomePage.container}>
                <Loading loading={product.loading} />
                <LinearGradient colors={['#E33545', '#F9405C', '#E9515E']} style={IndexStyles.StylesHomePage.containerCrossbar}>
                    <View style={IndexStyles.StylesHomePage.viewcrossbar}>
                        <View style={IndexStyles.StylesHomePage.viewcrossbar1}>
                            <Icon.LogoAppleSVG width={60} height={130} fill='#fff' />
                            <Text style={IndexStyles.StylesHomePage.textcrossbar}>iStore</Text>
                        </View>
                        <View style={IndexStyles.StylesHomePage.viewcrossbar2}>
                            <TouchableOpacity>
                                <Icon.BellSVG width={25} height={25} fill='#fff' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(user.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'EditProfile' } as any)}>
                                {user.user.photoUrl ? <Image source={{ uri: user.user.photoUrl }} style={IndexStyles.StylesHomePage.avatar} /> : <Icon.AvatarSVG width={25} height={25} fill='#fff' />}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate(user.isLogged ? 'StackMisc' : 'AuthUser', { screen: 'SearchHome' } as any)} activeOpacity={0.8}>
                            <View style={IndexStyles.StylesHomePage.input}>
                                <Icon.SearchSVG width={20} height={20} fill='red' />
                                <Text style={IndexStyles.StylesHomePage.textSearch}>Search</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={IndexStyles.StylesHomePage.viewbanner}>
                            <BannerSlider />
                        </View>
                    </View>
                </LinearGradient>
                <View style={IndexStyles.StylesHomePage.body}>
                    <View style={IndexStyles.StylesHomePage.ViewItemProduct}>
                        <Text style={IndexStyles.StylesHomePage.textItemProduct}>Điện thoại nổi bật</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'Article', params: { name: 'Iphone' } } as any)}>
                            <Text style={IndexStyles.StylesHomePage.textViewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewProduct}>
                        <FlatList
                            data={product.data.filter((item) => item.category.name === 'Iphone').slice(0, 10)}
                            renderItem={({ item }) => <ItemProductHomePage item={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            getItemLayout={(data, index) => ({ length: 200, offset: 200 * index, index })}
                        />
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewItemProduct}>
                        <Text style={IndexStyles.StylesHomePage.textItemProduct}>Macbook mới nhất</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'Article', params: { name: 'Mac' } } as any)}>
                            <Text style={IndexStyles.StylesHomePage.textViewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewProduct}>
                        <FlatList
                            data={product.data.filter((item) => item.category.name === 'Mac').slice(0, 10)}
                            renderItem={({ item }) => <ItemProductHomePage item={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            getItemLayout={(data, index) => ({ length: 200, offset: 200 * index, index })}
                        />
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewItemProduct}>
                        <Text style={IndexStyles.StylesHomePage.textItemProduct}>Airpods chính hãng</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'Article', params: { name: 'Airpods' } } as any)}>
                            <Text style={IndexStyles.StylesHomePage.textViewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewProduct}>
                        <FlatList
                            data={product.data.filter((item) => item.category.name === 'Airpods').slice(0, 10)}
                            renderItem={({ item }) => <ItemProductHomePage item={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            getItemLayout={(data, index) => ({ length: 200, offset: 200 * index, index })}
                        />
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewItemProduct}>
                        <Text style={IndexStyles.StylesHomePage.textItemProduct}>Máy tỉnh bảng</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'Article', params: { name: 'Ipad' } } as any)}>
                            <Text style={IndexStyles.StylesHomePage.textViewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewProduct}>
                        <FlatList
                            data={product.data.filter((item) => item.category.name === 'Ipad').slice(0, 10)}
                            renderItem={({ item }) => <ItemProductHomePage item={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            getItemLayout={(data, index) => ({ length: 200, offset: 200 * index, index })}
                        />
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewItemProduct}>
                        <Text style={IndexStyles.StylesHomePage.textItemProduct}>Phụ kiện apple</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'Article', params: { name: 'Phụ kiện' } } as any)}>
                            <Text style={IndexStyles.StylesHomePage.textViewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={IndexStyles.StylesHomePage.ViewProduct}>
                        <FlatList
                            data={product.data.filter((item) => item.category.name === 'Phụ kiện').slice(0, 10)}
                            renderItem={({ item }) => <ItemProductHomePage item={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            getItemLayout={(data, index) => ({ length: 200, offset: 200 * index, index })}
                        />
                    </View>
                </View>
                <View style={IndexStyles.StylesHomePage.containerFooter}>
                    <Text style={IndexStyles.StylesHomePage.textTitleFooter}>Liên hệ</Text>
                    <View style={IndexStyles.StylesHomePage.line} />
                    <View style={IndexStyles.StylesHomePage.viewFooter}>
                        <View style={IndexStyles.StylesHomePage.viewFooterText}>
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Mua ngay:</Text>
                            <Text style={IndexStyles.StylesHomePage.phoneFooter}>1800 6018 (07:30 - 21:30)</Text>
                        </View>
                        <View style={IndexStyles.StylesHomePage.viewFooterText}>
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Bảo hành:</Text>
                            <Text style={IndexStyles.StylesHomePage.phoneFooter}>1800 6018 (07:30 - 21:30)</Text>
                        </View>
                    </View>
                    <View style={IndexStyles.StylesHomePage.viewFooter}>
                        <View style={IndexStyles.StylesHomePage.viewFooterText}>
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Kỹ thuật:</Text>
                            <Text style={IndexStyles.StylesHomePage.phoneFooter}>1800 6018 (07:30 - 21:30)</Text>
                        </View>
                        <View style={IndexStyles.StylesHomePage.viewFooterText}>
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Góp ý:</Text>
                            <Text style={IndexStyles.StylesHomePage.phoneFooter}>1800 6018 (07:30 - 21:30)</Text>
                        </View>
                    </View>
                    <View style={IndexStyles.StylesHomePage.viewFooter}>
                        <View style={IndexStyles.StylesHomePage.viewShipper}>
                            <Icon.WaitShipperSVG width={40} height={40} fill='red' />
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Miễn phí vẫn chuyển</Text>
                        </View>
                        <View style={IndexStyles.StylesHomePage.viewShipper}>
                            <Icon.ProtectSVG width={40} height={40} fill='red' />
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Bảo hành lên tới 12 tháng</Text>
                        </View>
                    </View>
                    <View style={IndexStyles.StylesHomePage.viewFooter}>
                        <View style={IndexStyles.StylesHomePage.viewShipper}>
                            <Icon.ProductSVG width={40} height={40} fill='red' />
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Sản phẩm chính hãng</Text>
                        </View>
                        <View style={IndexStyles.StylesHomePage.viewShipper}>
                            <Icon.ChangeSVG width={40} height={40} fill='red' />
                            <Text style={IndexStyles.StylesHomePage.textFooter}>Hoàn trả, đổi sản phẩm</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default HomePage