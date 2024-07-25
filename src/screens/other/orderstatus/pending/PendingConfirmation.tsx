import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IndexStyles } from '../../../../import/IndexStyles';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../../import/IndexFeatures';
import { useGetOrderUserQuery, useGetStatusOrderQuery } from '../../../../service/Api/Index.Order';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLOR } from '../../../../constant/Colors';
import { Icon } from '../../../../constant/Icon';
import { FormatPrice, FormatPriceVND2 } from '../../../../utils/FormatPrice';
import { Responsive } from '../../../../constant/Responsive';
import { ScrollView } from 'react-native-gesture-handler';
import { paymentStatus, status } from '../../../../model/entity/IndexOrder.Entity';


const PendingConfirmation: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const user = useAppSelector(state => state.root.Auth.user._id);

    const { data, error, isLoading } = useGetStatusOrderQuery({ id: user, status: status, paymentStatus: paymentStatus });

    const pendingOrder = data?.data

    const payment = 'Thanh toán trong vòng 8 tiếng hoặc nếu không đơn hàng sẽ tự động hủy, nhân viên sẽ liên hệ với bạn để xác nhận đơn hàng.';

    const confirmStatus = "Đơn hàng đang chờ xác nhận, shop sẽ xác nhận trong thời gian sớm nhất.";

    if (isLoading) {
        return (
            <View style={IndexStyles.StyleDetailArticle.loading}>
                <ActivityIndicator size="large" color={COLOR.REDONE} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={IndexStyles.StylePendingConfirmation.container}>
                {pendingOrder?.map((item, index) => (
                    <View key={index}>
                        <TouchableOpacity style={IndexStyles.StylePendingConfirmation.containerItem} onPress={() => navigation.navigate('StackMisc', { screen: 'DetailOrder', params: { id: item._id, payment: payment } })}>
                            <View style={IndexStyles.StylePendingConfirmation.viewText}>
                                <View style={IndexStyles.StylePendingConfirmation.viewIcon}>
                                    <Icon.StoreSVG width={25} height={25} />
                                    <Text style={IndexStyles.StylePendingConfirmation.textShop}>ShopApple</Text>
                                </View>
                                <Text style={IndexStyles.StylePendingConfirmation.textStatus}>{item.paymentStatus}</Text>
                            </View>
                            <View style={IndexStyles.StylePendingConfirmation.viewCart}>
                                <View style={IndexStyles.StylePendingConfirmation.viewImagge}>
                                    <Image source={{ uri: item.cart[0].products.priceColor.image }} style={IndexStyles.StylePendingConfirmation.image} />
                                </View>
                                <View style={IndexStyles.StylePendingConfirmation.viewInfor}>
                                    <Text style={IndexStyles.StylePendingConfirmation.textInfor}>{item.cart[0].products.name} {item.cart[0].products.model} {item.cart[0].products.storage}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={IndexStyles.StylePendingConfirmation.textInfor}>{item.cart[0].products.priceColor.color}</Text>
                                        <Text style={IndexStyles.StylePendingConfirmation.textQuantity}>x{item.cart[0].quantity}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: Responsive.wp(10) }}>
                                        <Text style={IndexStyles.StylePendingConfirmation.textChangeProducts}>Đổi trả miễn phí 7 ngày</Text>
                                        <Text style={IndexStyles.StylePendingConfirmation.textPrice}>{FormatPrice(item.cart[0].products.priceColor.price)}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={IndexStyles.StylePendingConfirmation.line} />
                            {item.cart.length > 1 ? (
                                <TouchableOpacity onPress={() => navigation.navigate('StackMisc', { screen: 'DetailOrder', params: { id: item._id, payment: payment } })}>
                                    <Text style={IndexStyles.StylePendingConfirmation.textMoreProducts}>Xem thêm sản phẩm</Text>
                                    <View style={IndexStyles.StylePendingConfirmation.line} />
                                </TouchableOpacity>
                            ) : null}
                            <View style={IndexStyles.StylePendingConfirmation.viewLengthCart}>
                                <Text style={IndexStyles.StylePendingConfirmation.textLengthCart}>{item.cart.length} sản phẩm</Text>
                                <Text style={IndexStyles.StylePendingConfirmation.textTotal}>Tổng thanh toán: {FormatPriceVND2(item.totalAmount)}</Text>
                            </View>
                            <View style={IndexStyles.StylePendingConfirmation.line} />
                            {item.paymentStatus === "Chờ thanh toán" ? (
                                <View style={IndexStyles.StylePendingConfirmation.viewPayment}>
                                    <Text style={IndexStyles.StylePendingConfirmation.textPayment}>{payment}</Text>
                                    <TouchableOpacity style={IndexStyles.StylePendingConfirmation.viewButton}>
                                        <Text style={IndexStyles.StylePendingConfirmation.textButton}>Thanh toán ngay</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={IndexStyles.StylePendingConfirmation.viewPayment}>
                                    <Text style={IndexStyles.StylePendingConfirmation.textConfirm}>{confirmStatus}</Text>
                                    <TouchableOpacity style={IndexStyles.StylePendingConfirmation.viewButton} >
                                        <Text style={IndexStyles.StylePendingConfirmation.textButton}>Đang xác nhận</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                ))
                }
            </View>
        </ScrollView>
    )
}

export default PendingConfirmation