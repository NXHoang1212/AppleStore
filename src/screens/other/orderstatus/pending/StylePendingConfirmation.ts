import { StyleSheet } from "react-native";
import { COLOR } from "../../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../../constant/Fonts";
import { Responsive } from "../../../../constant/Responsive";


const StylePendingConfirmation = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        height: Responsive.hp(18),
        gap: Responsive.wp(3),
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Responsive.wp(4),
        marginLeft: Responsive.wp(3.5),
        top: Responsive.hp(2),
    },
    textheader: {
        color: COLOR.WHITE,
        fontSize: 18,
        fontFamily: FontsROBOTO.ROBOTO_BOLD,
        letterSpacing: 0.5,
    },
});

export { StylePendingConfirmation }