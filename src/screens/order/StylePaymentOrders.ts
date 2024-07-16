import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../constant/Fonts";
import { Responsive } from "../../constant/Responsive";


const StylePaymentOrders = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYONE
    },
    viewheader: {
        height: Responsive.hp(12),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 1.5,
        borderBottomColor: COLOR.GREY,
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 8,
        elevation: 5,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        top: Responsive.hp(6.2),
        paddingHorizontal: Responsive.wp(5),
    },
    textHeader: {
        fontSize: Responsive.RFPercentage(2.8),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.BLACK,
        fontWeight: 'bold',
        textAlign: 'center',
        width: Responsive.wp(80),
        letterSpacing: 0.25
    },
    containerBody: {
        flex: 1,
        backgroundColor: COLOR.GRAYONE,
    },
    viewAddress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        paddingHorizontal: Responsive.wp(5),
        marginTop: Responsive.hp(1),
    },
    iconLotaion: {
        width: Responsive.wp(2),
        height: Responsive.hp(10),
    },
    textAddress: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.BLACK,
        fontWeight: 'bold',
        letterSpacing: 0.25
    },
    viewAddressDetail: {
        marginVertical: Responsive.hp(1),
    },
    textAddressDetail: {
        fontSize: Responsive.RFPercentage(2),
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        color: COLOR.BLACK,
    },
    iconRight: {
        width: Responsive.wp(7),
        height: Responsive.hp(5),
        resizeMode: 'contain',
    },
    viewOrder: {
        backgroundColor: COLOR.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Responsive.wp(1),
    },
    viewOrderDetail: {
        marginVertical: Responsive.hp(1),
    },
    textOrder: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_BOLD,
        color: COLOR.BLACK,
        width: Responsive.wp(73),
    },
    textChangeOrder: {
        fontSize: Responsive.RFPercentage(1.9),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        borderWidth: 1,
        borderColor: COLOR.REDONE,
        width: Responsive.wp(28),
        textAlign: 'center',
        borderRadius: 5,
    },
    textOrderDetail: {
        fontSize: Responsive.RFPercentage(2),
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        color: COLOR.BLACK,
    },
    imageProduct: {
        width: Responsive.wp(25),
        height: Responsive.hp(15),
    },
    viewPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GREY,
        width: Responsive.wp(100),
        alignSelf: 'center',
    },
    viewVoucher: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        paddingHorizontal: Responsive.wp(3),
        marginTop: Responsive.hp(2),
    },
    textVoucher: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.BLACK,
        fontWeight: 'bold',
        letterSpacing: 0.25
    },
    viewVoucherDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewVoucherText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: Responsive.wp(10),
    },
    textVoucherDetail: {
        fontSize: Responsive.RFPercentage(2),
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        color: COLOR.BLACK,
    },
    viewShipper: {
        backgroundColor: '#35c5ff',
        paddingHorizontal: Responsive.wp(3),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: COLOR.BLUE,
    },
    textShipper: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.BLACK,
        fontWeight: 'bold',
        letterSpacing: 0.25
    },
    viewShipperDetail: {
        flexDirection: 'column',
    },
    textShipperDetail: {
        fontSize: Responsive.RFPercentage(2),
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        color: COLOR.BLACK,
        fontWeight: 'bold',
    },
    viewShipperText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewShipperPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
});

export { StylePaymentOrders }