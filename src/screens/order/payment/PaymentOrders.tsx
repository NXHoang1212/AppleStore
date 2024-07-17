import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IndexStyles } from '../../../import/IndexStyles'
import { Icon } from '../../../constant/Icon'
import { COLOR } from '../../../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MultiColorLine, CustomHeader } from '../../../import/IndexComponent'
import { useGetAddressIdUserQuery } from '../../../service/Api/IndexAddress'
import { useAppSelector } from '../../../import/IndexFeatures'
import { useRoute } from '@react-navigation/native'
import { useGetCartIdsQuery } from '../../../service/Api/IndexCart'
import { FormatPrice } from '../../../utils/FormatPrice'
import { Responsive } from '../../../constant/Responsive'

const PaymentOrders = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const route = useRoute()
    const { id, shipper } = route.params as { id: string, shipper: string }
    const { data } = useGetAddressIdUserQuery(useAppSelector(state => state.root.Auth.user._id))
    const addressDefault = data?.data.find(item => item.isDefault === true)
    const { data: cart } = useGetCartIdsQuery(id)
    const [note, setNote] = useState<string>('')

    const totalProduct = cart?.data.reduce((total, item) => total + item.products.priceColor.price * item.quantity, 0) as number

    const totalPayment = totalProduct + parseInt(shipper) - 0

    return (
        <View style={IndexStyles.StylePaymentOrders.container}>
            <View style={IndexStyles.StylePaymentOrders.viewheader}>
                <View style={IndexStyles.StylePaymentOrders.headerTitle}>
                    <CustomHeader title='Thanh toán' />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: Responsive.hp(14) }}>
                <View style={IndexStyles.StylePaymentOrders.containerBody}>
                    <TouchableOpacity style={IndexStyles.StylePaymentOrders.viewAddress} onPress={() => navigation.navigate('SelectedAddress')}>
                        <View style={IndexStyles.StylePaymentOrders.iconLotaion}>
                            <Icon.LocationSVG width={20} height={20} fill={COLOR.REDONE} />
                        </View>
                        <View style={IndexStyles.StylePaymentOrders.viewAddressDetail}>
                            <Text style={IndexStyles.StylePaymentOrders.textAddress}>Địa chỉ nhận hàng</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textAddressDetail}>{addressDefault?.name} | {addressDefault?.phone}</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textAddressDetail}>{addressDefault?.houseNumber}</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textAddressDetail}>{addressDefault?.district},{addressDefault?.ward},{addressDefault?.province}</Text>
                        </View>
                        <Image source={Icon.RIGHT} style={IndexStyles.StylePaymentOrders.iconRight} />
                    </TouchableOpacity>
                    <MultiColorLine />
                    <View style={{ marginTop: 10 }}>
                        {cart?.data.map((item, index) => (
                            <View key={index}>
                                <View style={IndexStyles.StylePaymentOrders.viewOrder}>
                                    <Image source={{ uri: item.products.priceColor.image as string }} style={IndexStyles.StylePaymentOrders.imageProduct} />
                                    <View style={IndexStyles.StylePaymentOrders.viewOrderDetail}>
                                        <Text style={IndexStyles.StylePaymentOrders.textOrder}>{item.products.name} {item.products.model} {item.products.storage}</Text>
                                        <Text style={IndexStyles.StylePaymentOrders.textChangeOrder}>Đổi ý miễn phí</Text>
                                        <Text style={IndexStyles.StylePaymentOrders.textOrderDetail}>Màu:{item.products.priceColor.color}</Text>
                                        <View style={IndexStyles.StylePaymentOrders.viewPrice}>
                                            <Text style={IndexStyles.StylePaymentOrders.textOrderDetail}>Giá:{FormatPrice(item.products.priceColor?.price as number)}</Text>
                                            <Text style={IndexStyles.StylePaymentOrders.textOrderDetail}>x{item.quantity}</Text>
                                        </View>
                                    </View>
                                </View>
                                {index !== cart.data.length - 1 && <View style={IndexStyles.StylePaymentOrders.line} />}
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={IndexStyles.StylePaymentOrders.viewVoucher}>
                        <Icon.VoucherSVG width={30} height={30} fill={COLOR.REDONE} />
                        <View style={IndexStyles.StylePaymentOrders.viewVoucherDetail}>
                            <Text style={IndexStyles.StylePaymentOrders.textVoucher}>Vourcher của shop</Text>
                            <View style={IndexStyles.StylePaymentOrders.viewVoucherText}>
                                <Text style={IndexStyles.StylePaymentOrders.textVoucherDetail}>Chọn hoặc nhập mã</Text>
                                <Image source={Icon.RIGHT} style={IndexStyles.StylePaymentOrders.iconRight} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={IndexStyles.StylePaymentOrders.viewShipper}>
                        <Text style={IndexStyles.StylePaymentOrders.textShipper}>Phương thức vận chuyển</Text>
                        <View style={IndexStyles.StylePaymentOrders.viewShipperDetail}>
                            <View style={IndexStyles.StylePaymentOrders.viewShipperText}>
                                <Text style={IndexStyles.StylePaymentOrders.textShipperDetail}>Giao hàng tiêu chuẩn</Text>
                                <Text style={IndexStyles.StylePaymentOrders.textShipperDetail}>{shipper}</Text>
                            </View>
                            <View style={IndexStyles.StylePaymentOrders.viewShipperPrice}>
                                <Icon.WaitShipperSVG width={20} height={20} fill={COLOR.BLUE} />
                                <Text style={IndexStyles.StylePaymentOrders.textShipperDetail}>Đảm bảo nhận hàng trong vòng 3 ngày</Text>
                            </View>
                        </View>
                    </View>
                    <View style={IndexStyles.StylePaymentOrders.viewNote}>
                        <Text style={IndexStyles.StylePaymentOrders.textNote}>Tin nhắn</Text>
                        <TextInput
                            placeholder='Lưu ý cho shop'
                            value={note}
                            onChangeText={(text) => setNote(text)}
                            style={IndexStyles.StylePaymentOrders.inputNote}
                        />
                    </View>
                    <TouchableOpacity style={IndexStyles.StylePaymentOrders.viewPayment}>
                        <View style={IndexStyles.StylePaymentOrders.viewIcon}>
                            <Icon.PaymentSVG width={25} height={30} fill={COLOR.REDONE} />
                            <Text style={IndexStyles.StylePaymentOrders.textPayment}>Phương thức thanh toán</Text>
                        </View>
                        <Image source={Icon.RIGHT} style={IndexStyles.StylePaymentOrders.iconRight} />
                    </TouchableOpacity>
                    <View style={IndexStyles.StylePaymentOrders.viewDetailOrderPayment}>
                        <View style={IndexStyles.StylePaymentOrders.viewIcon}>
                            <Icon.InvoiceSVG width={25} height={30} fill={COLOR.REDONE} />
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>Chi tiết thanh toán</Text>
                        </View>
                        <View style={IndexStyles.StylePaymentOrders.viewDetailOrder}>
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>Tổng tiền sản phẩm</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>{FormatPrice(totalProduct)}</Text>
                        </View>
                        <View style={IndexStyles.StylePaymentOrders.viewDetailOrder}>
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>Phí vận chuyển</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>{shipper}</Text>
                        </View>
                        <View style={IndexStyles.StylePaymentOrders.viewDetailOrder}>
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>Giảm giá sản phẩm</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textDetailOrder}>0đ</Text>
                        </View>
                        <View style={IndexStyles.StylePaymentOrders.viewDetailOrder}>
                            <Text style={IndexStyles.StylePaymentOrders.textTotalPayment}>Tổng thanh toán đơn hàng</Text>
                            <Text style={IndexStyles.StylePaymentOrders.textTotalPayment}>{FormatPrice(totalPayment)}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={IndexStyles.StylePaymentOrders.containerFooter}>
                <View style={IndexStyles.StylePaymentOrders.viewButton}>
                    <View style={IndexStyles.StylePaymentOrders.viewTotalPayment}>
                        <Text style={IndexStyles.StylePaymentOrders.textTotalTitle}>Tổng đơn hàng</Text>
                        <Text style={IndexStyles.StylePaymentOrders.textTotalPayment}>{FormatPrice(totalPayment)}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={IndexStyles.StylePaymentOrders.textButton}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PaymentOrders

