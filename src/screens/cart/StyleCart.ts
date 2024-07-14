import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Colors";
import { FontsOSANS } from "../../constant/Fonts";
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
});

export { StyleCart }