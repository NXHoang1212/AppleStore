import { StyleSheet } from "react-native";
import { COLOR } from "../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../constant/Fonts";
import { Responsive } from "../../../constant/Responsive";


const StylesHomePage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    containerCrossbar: {
        height: Responsive.hp(30),
        backgroundColor: COLOR.RED,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    viewcrossbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: Responsive.hp(0.5),
    },
    viewcrossbar1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textcrossbar: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: 20,
        color: COLOR.WHITE,
        right: 11,
    },
    viewcrossbar2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Responsive.wp(7),
        gap: 13,
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Responsive.wp(90),
        alignSelf: 'center',
        borderRadius: 10,
        height: Responsive.hp(5),
        bottom: Responsive.hp(2),
        backgroundColor: COLOR.WHITE,
        paddingLeft: 10,
        gap: Responsive.wp(2),
    },
    textSearch: {
        fontFamily: FontsOSANS.OSANS_REGULAR,
        fontSize: 17,
        color: COLOR.RED,
    },
    viewbanner: {
        position: 'absolute',
        marginTop: Responsive.hp(2),
    },
    body: {
        marginTop: Responsive.hp(23),
        flex: 1,
    },
    ViewItemProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Responsive.wp(4),
    },
    textItemProduct: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: 17,
        color: COLOR.BLACK,
    },
    textViewAll: {
        fontFamily: FontsOSANS.OSANS_REGULAR,
        fontSize: 15,
        color: COLOR.RED,
    },
    ViewProduct: {
        marginTop: Responsive.hp(2),
        justifyContent: 'center',
        alignItems: 'center',
        width: Responsive.wp(100),
        height: Responsive.hp(50),
        flexDirection: 'row',
    },
    containerFooter: {
        marginHorizontal: Responsive.wp(4),
        paddingBottom: Responsive.hp(2),
    },
    viewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Responsive.hp(2),
    },
    line: {
        width: Responsive.wp(95),
        height: 2,
        backgroundColor: COLOR.GRAY,
        alignSelf: 'center',
    },
    textTitleFooter: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: 17,
        color: COLOR.REDONE,
    },
    textFooter: {
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        fontSize: 17,
        color: COLOR.BLACK,
    },
    viewFooterText: {
        flexDirection: 'column',
        gap: 5,
    },
    phoneFooter: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: 14.8,
        color: COLOR.BLUE,
    },
    viewShipper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Responsive.hp(2),
    },
});

export { StylesHomePage }