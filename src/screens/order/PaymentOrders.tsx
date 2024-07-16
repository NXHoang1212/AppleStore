import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IndexStyles } from '../../import/IndexStyles'
import { Icon } from '../../constant/Icon'
import { COLOR } from '../../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MultiColorLine } from '../../import/IndexComponent'
import { useGetAddressIdUserQuery } from '../../service/Api/IndexAddress'
import { useAppSelector } from '../../import/IndexFeatures'
import { useRoute } from '@react-navigation/native'
import { useGetCartIdsQuery } from '../../service/Api/IndexCart'
import { FormatPrice } from '../../utils/FormatPrice'

const PaymentOrders = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const route = useRoute()
    const { id, shipper } = route.params as { id: string, shipper: string }
    const { data } = useGetAddressIdUserQuery(useAppSelector(state => state.root.Auth.user._id))
    const addressDefault = data?.data.find(item => item.isDefault === true)
    const { data: cart } = useGetCartIdsQuery(id)

    return (
        <View style={IndexStyles.StylePaymentOrders.container}>
            <View style={IndexStyles.StylePaymentOrders.viewheader}>
                <View style={IndexStyles.StylePaymentOrders.headerTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon.BackSVG width={28} height={28} fill={COLOR.REDONE} />
                    </TouchableOpacity>
                    <Text style={IndexStyles.StylePaymentOrders.textHeader}>Thanh toán</Text>
                </View>
            </View>
            <View style={IndexStyles.StylePaymentOrders.containerBody}>
                <TouchableOpacity style={IndexStyles.StylePaymentOrders.viewAddress}>
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
                                        <Text style={IndexStyles.StylePaymentOrders.textOrderDetail}>Giá:{FormatPrice(item.products.priceColor.price as number)}</Text>
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
            </View>
        </View>
    )
}

export default PaymentOrders

