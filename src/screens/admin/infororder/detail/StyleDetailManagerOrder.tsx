import { StyleSheet } from "react-native";
import { COLOR } from "../../../../constant/Colors";
import { Responsive } from "../../../../constant/Responsive";
import { FontsOSANS, FontsROBOTO } from "../../../../constant/Fonts";

const StyleDetailManagerOder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewheader: {
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 1.8,
        borderBottomColor: COLOR.GRAYONE,
        height: Responsive.hp(12),
        justifyContent: 'center',
        paddingHorizontal: Responsive.wp(3),
        marginTop: Responsive.hp(1),
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: Responsive.hp(1.5),
        left: Responsive.wp(2),
    },
    containerBody: {
        flex: 1,
        backgroundColor: COLOR.GRAY,
    },
    viewPayment: {
        backgroundColor: COLOR.ORANGEONE,
        padding: Responsive.hp(2),
        borderBottomWidth: 1.8,
        borderBottomColor: COLOR.GRAYONE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewPaymentPending: {
        width: Responsive.wp(70),
    },
    textPayment: {
        fontFamily: FontsOSANS.OSANS_REGULAR,
        fontSize: Responsive.RFPercentage(2.2),
        color: COLOR.WHITE,
    },
    viewShipper: {
        paddingHorizontal: Responsive.wp(5),
        paddingVertical: Responsive.hp(2),
        backgroundColor: COLOR.WHITE,
    },
    viewShipperTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: Responsive.wp(2),
        marginBottom: Responsive.hp(1),
    },
    textShippertTitle: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold',
    },
    textShipper: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.2),
        color: COLOR.BLACK,
        textAlign: 'justify',
    },
    viewAddress: {
        paddingHorizontal: Responsive.wp(5),
        paddingVertical: Responsive.hp(2),
        backgroundColor: COLOR.WHITE,
    },
    viewAddressTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: Responsive.wp(2),
    },
    textAddressTitle: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        width: Responsive.wp(65),
    },
    textCoppy: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.2),
        color: COLOR.ORANGEONE,
    },
    viewAddressContent: {
        marginTop: Responsive.hp(1),
    },
    textAddressContent: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.2),
        color: COLOR.BLACK,
    },
    viewCart: {
        paddingHorizontal: Responsive.wp(5),
        paddingVertical: Responsive.hp(2),
        backgroundColor: COLOR.WHITE,
    },
    viewCartTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: Responsive.wp(2),
    },
    textCartTitle: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold',
    },
    viewCartContent: {
        marginTop: Responsive.hp(1),
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageCartContent: {
        width: Responsive.wp(22),
        height: Responsive.hp(12),
        resizeMode: 'contain',
        right: Responsive.wp(2),
    },
    viewCartInfor: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: Responsive.hp(1),
    },
    textCartContent: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.2),
        color: COLOR.BLACK,
        width: Responsive.wp(48),
    },
    textChangeProducts: {
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        fontSize: Responsive.RFPercentage(1.85),
        color: COLOR.RED,
        width: Responsive.wp(38),
        height: Responsive.hp(3.3),
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 1,
        borderColor: COLOR.REDTWO,
        borderRadius: 3,
    },
    viewTotal: {
        paddingHorizontal: Responsive.wp(5),
        backgroundColor: COLOR.WHITE,
    },
    viewTotalTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Responsive.hp(1),
    },
    textTotalTitle: {
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
    },
    textTotal: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.2),
        color: COLOR.BLACK,
    },
    viewPaymentMethod: {
        paddingHorizontal: Responsive.wp(5),
        backgroundColor: COLOR.WHITE,
        marginTop: Responsive.hp(1),
        height: Responsive.hp(10),
        justifyContent: 'center',
    },
    viewPaymentMethodTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.wp(2),
    },
    textPaymentMethodTitle: {
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold',
    },
    textPaymentMethod: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
    },
    viewOrderCode: {
        paddingHorizontal: Responsive.wp(5),
        backgroundColor: COLOR.WHITE,
        marginTop: Responsive.hp(1),
    },
    viewOrderCodeTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.wp(2),
    },
    viewOrderCodeInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Responsive.hp(1),
    },
    textOrderCodeTitle: {
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        width: Responsive.wp(41),
    },
    textCode: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold'
    },
    textOrderCode: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.BLACK,
    },
    viewPaymentPendingNow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: Responsive.wp(2),
        paddingVertical: Responsive.hp(3),
    },
    viewPaymentNow: {
        borderWidth: 1,
        borderColor: COLOR.BLACKONE,
        borderRadius: 5,
        width: Responsive.wp(40),
        height: Responsive.hp(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewButton: {
        backgroundColor: COLOR.ORANGEONE,
        padding: Responsive.hp(2),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.WHITE,
    },
    viewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Responsive.wp(5),
    },
    viewOrderButton: {
        backgroundColor: COLOR.ORANGEONE,
        justifyContent: 'center',
        alignItems: 'center',
        height: Responsive.hp(6),
        width: Responsive.wp(40),
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: Responsive.hp(2),
    },
    textActive: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.WHITE,
    },
});

export default StyleDetailManagerOder;