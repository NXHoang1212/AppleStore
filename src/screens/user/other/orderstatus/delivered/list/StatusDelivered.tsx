import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IndexStyles } from '../../../../../../import/IndexStyles';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../../../../import/IndexFeatures';
import { useGetOrderUserQuery } from '../../../../../../service/Api/Index.Order';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLOR } from '../../../../../../constant/Colors';
import { Icon } from '../../../../../../constant/Icon';

import { FormatPrice, FormatPriceVND2 } from '../../../../../../utils/FormatPrice';
import { Responsive } from '../../../../../../constant/Responsive';
import { ScrollView } from 'react-native-gesture-handler';

const StatusDelivered: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const user = useAppSelector(state => state.root.Auth.user._id);

    const { data, error, isLoading } = useGetOrderUserQuery(user);

    const pendingOrder = data?.data.filter((item) => item.status === "Đã giao");

    const payment = 'Giao hàng thành công, cảm ơn bạn đã mua hàng tại shop.';

    if (isLoading) {
        return (
            <View style={IndexStyles.StyleDetailArticle.loading}>
                <ActivityIndicator size="large" color={COLOR.REDONE} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={IndexStyles.StyleStatusDelivered.container}>
                {pendingOrder?.map((item, index) => (
                    <View key={index}>
                        <TouchableOpacity style={IndexStyles.StyleStatusDelivered.containerItem} onPress={() => navigation.navigate('StackMisc', { screen: 'DetailStatusDelivered', params: { id: item._id, payment: payment } })}>
                            <View style={IndexStyles.StyleStatusDelivered.viewText}>
                                <View style={IndexStyles.StyleStatusDelivered.viewIcon}>
                                    <Icon.StoreSVG width={25} height={25} />
                                    <Text style={IndexStyles.StyleStatusDelivered.textShop}>ShopApple</Text>
                                </View>
                                <Text style={IndexStyles.StyleStatusDelivered.textStatus}>{item.paymentStatus}</Text>
                            </View>
                            <View style={IndexStyles.StyleStatusDelivered.viewCart}>
                                <View style={IndexStyles.StyleStatusDelivered.viewImagge}>
                                    <Image source={{ uri: item.products[0].priceColor.image }} style={IndexStyles.StyleStatusDelivered.image} />
                                </View>
                                <View style={IndexStyles.StyleStatusDelivered.viewInfor}>
                                    <Text style={IndexStyles.StyleStatusDelivered.textInfor}>{item.products[0].name} {item.products[0].model} {item.products[0].storage}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={IndexStyles.StyleStatusDelivered.textInfor}>{item.products[0].priceColor.color}</Text>
                                        <Text style={IndexStyles.StyleStatusDelivered.textQuantity}>x{item.products[0].quantity}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: Responsive.wp(10) }}>
                                        <Text style={IndexStyles.StyleStatusDelivered.textChangeProducts}>Đổi trả miễn phí 7 ngày</Text>
                                        <Text style={IndexStyles.StyleStatusDelivered.textPrice}>{FormatPrice(item.products[0].priceColor.price)}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={IndexStyles.StyleStatusDelivered.line} />
                            {item.products.length > 1 ? (
                                <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'DetailStatusDelivered', params: { id: item._id, payment: payment } })}>
                                    <Text style={IndexStyles.StyleStatusDelivered.textMoreProducts}>Xem thêm sản phẩm</Text>
                                    <View style={IndexStyles.StyleStatusDelivered.line} />
                                </TouchableOpacity>
                            ) : null}
                            <View style={IndexStyles.StyleStatusDelivered.viewLengthCart}>
                                <Text style={IndexStyles.StyleStatusDelivered.textLengthCart}>{item.products.length} sản phẩm</Text>
                                <Text style={IndexStyles.StyleStatusDelivered.textTotal}>Tổng thanh toán: {FormatPriceVND2(item.totalAmount)}</Text>
                            </View>
                            <View style={IndexStyles.StyleStatusDelivered.line} />
                            <View style={IndexStyles.StyleStatusDelivered.viewPayment}>
                                <Text style={IndexStyles.StyleStatusDelivered.textPayment}>{payment}</Text>
                                <View style={IndexStyles.StyleStatusDelivered.viewButton}>
                                    <Text style={IndexStyles.StyleStatusDelivered.textButton}>Mua lại</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
                }
            </View>
        </ScrollView>
    )
}

export default StatusDelivered