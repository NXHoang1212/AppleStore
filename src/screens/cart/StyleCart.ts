import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../constant/Fonts";
import { Responsive } from "../../constant/Responsive";


const StyleCart = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYONE,
    },
    viewheader: {
        flexDirection: 'row',
        height: Responsive.hp(13),
        backgroundColor: COLOR.REDONE,
        shadowColor: COLOR.REDONE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    headerSmall: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.wp(2),
        top: Responsive.hp(1.8),
    },
    textheader: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: Responsive.RFPercentage(2.5),
        color: COLOR.WHITE,
        left: Responsive.wp(19),
    },
    iconback: {
        marginLeft: Responsive.wp(4),
    },
    containerBody: {
        marginTop: Responsive.hp(1),
        backgroundColor: COLOR.GRAYONE,
        flexDirection: 'column',
        gap: Responsive.hp(1),
    },
    viewButton: {
        backgroundColor: COLOR.WHITE,
        height: Responsive.hp(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: COLOR.GREY,
        paddingHorizontal: Responsive.wp(2),
        gap: Responsive.wp(4),
    },
    textButton: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: Responsive.RFPercentage(2.3),
        color: COLOR.WHITE,
    },
    textPayment: {
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        fontSize: Responsive.RFPercentage(2.4),
        color: COLOR.BLACK,
    },
    textTotal: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: Responsive.RFPercentage(2),
        color: COLOR.REDONE,
        left: Responsive.wp(2),
    },
    textShipper: {
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        fontSize: Responsive.RFPercentage(1.9),
        color: COLOR.BLACKONE,
        marginLeft: Responsive.wp(7),
    },
    textTotalShipper: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: Responsive.RFPercentage(1.9),
        color: COLOR.REDONE,
    },
    iconRight: {
        width: Responsive.wp(7),
        height: Responsive.hp(3),
        tintColor: COLOR.REDONE,
    },
    viewPayment: {
        backgroundColor: COLOR.REDONE,
        width: Responsive.wp(38),
        height: Responsive.hp(6),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});

export { StyleCart }