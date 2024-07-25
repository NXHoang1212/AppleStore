import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IndexStyles } from '../../../../../import/IndexStyles';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../../../import/IndexFeatures';
import { useGetOrderUserQuery } from '../../../../../service/Api/Index.Order';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLOR } from '../../../../../constant/Colors';
import { Icon } from '../../../../../constant/Icon';
import { FormatPrice, FormatPriceVND2 } from '../../../../../utils/FormatPrice';
import { Responsive } from '../../../../../constant/Responsive';
import { ScrollView } from 'react-native-gesture-handler';

const StatusCancelled: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const user = useAppSelector(state => state.root.Auth.user._id);

    const { data, error, isLoading } = useGetOrderUserQuery(user);

    const pendingOrder = data?.data.filter((item) => item.status === "Đã hủy");

    const payment = 'Đơn hàng đã huỷ';

    if (isLoading) {
        return (
            <View style={IndexStyles.StyleDetailArticle.loading}>
                <ActivityIndicator size="large" color={COLOR.REDONE} />
            </View>
        )
    }

    return (
        <View style={IndexStyles.StyleStatusCancelled.container}>
            {pendingOrder?.map((item, index) => (
                <View key={index}>
                    <TouchableOpacity style={IndexStyles.StyleStatusCancelled.containerItem} onPress={() => navigation.navigate('StackMisc', { screen: 'DetailStatusCancelled', params: { id: item._id, payment: payment } })}>
                        <View style={IndexStyles.StyleStatusCancelled.viewText}>
                            <View style={IndexStyles.StyleStatusCancelled.viewIcon}>
                                <Icon.StoreSVG width={25} height={25} />
                                <Text style={IndexStyles.StyleStatusCancelled.textShop}>ShopApple</Text>
                            </View>
                            <Text style={IndexStyles.StyleStatusCancelled.textStatus}>{item.paymentStatus}</Text>
                        </View>
                        <View style={IndexStyles.StyleStatusCancelled.viewCart}>
                            <View style={IndexStyles.StyleStatusCancelled.viewImagge}>
                                <Image source={{ uri: item.cart[0].products.priceColor.image }} style={IndexStyles.StyleStatusCancelled.image} />
                            </View>
                            <View style={IndexStyles.StyleStatusCancelled.viewInfor}>
                                <Text style={IndexStyles.StyleStatusCancelled.textInfor}>{item.cart[0].products.name} {item.cart[0].products.model} {item.cart[0].products.storage}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={IndexStyles.StyleStatusCancelled.textInfor}>{item.cart[0].products.priceColor.color}</Text>
                                    <Text style={IndexStyles.StyleStatusCancelled.textQuantity}>x{item.cart[0].quantity}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: Responsive.wp(10) }}>
                                    <Text style={IndexStyles.StyleStatusCancelled.textChangeProducts}>Đổi trả miễn phí 7 ngày</Text>
                                    <Text style={IndexStyles.StyleStatusCancelled.textPrice}>{FormatPrice(item.cart[0].products.priceColor.price)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={IndexStyles.StyleStatusCancelled.line} />
                        {item.cart.length > 1 ? (
                            <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'DetailStatusCancelled', params: { id: item._id, payment: payment } })}>
                                <Text style={IndexStyles.StyleStatusCancelled.textMoreProducts}>Xem thêm sản phẩm</Text>
                                <View style={IndexStyles.StyleStatusCancelled.line} />
                            </TouchableOpacity>
                        ) : null}
                        <View style={IndexStyles.StyleStatusCancelled.viewLengthCart}>
                            <Text style={IndexStyles.StyleStatusCancelled.textLengthCart}>{item.cart.length} sản phẩm</Text>
                            <Text style={IndexStyles.StyleStatusCancelled.textTotal}>Thành tiền: {FormatPriceVND2(item.totalAmount)}</Text>
                        </View>
                        <View style={IndexStyles.StyleStatusCancelled.line} />
                        <View style={IndexStyles.StyleStatusCancelled.viewPayment}>
                            <Text style={IndexStyles.StyleStatusCancelled.textPayment}>{payment}</Text>
                            <TouchableOpacity style={IndexStyles.StyleStatusCancelled.viewButton}>
                                <Text style={IndexStyles.StyleStatusCancelled.textButton}>Mua lại</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            ))
            }
        </View>
    )
}

export default StatusCancelled