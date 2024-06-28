import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Colors";
import { FontsOSANS } from "../../constant/Fonts";
import { Responsive } from "../../constant/Responsive";


const StyleCart = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        height: Responsive.hp(13),
        backgroundColor: COLOR.REDONE,
    },
    headerSmall: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.wp(2),
        top: Responsive.hp(1.5),
    },
    textheader: {
        fontFamily: FontsOSANS.OSANS_BOLD,
        fontSize: 18,
        color: COLOR.WHITE,
        left: Responsive.wp(19),
    },
    iconback: {
        marginLeft: Responsive.wp(4),
    }
});

export { StyleCart }