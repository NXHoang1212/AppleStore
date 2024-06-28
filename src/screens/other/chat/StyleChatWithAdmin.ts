import { StyleSheet } from "react-native";
import { COLOR } from "../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../constant/Fonts";
import { Responsive } from "../../../constant/Responsive";


const StyleChatWithAdmin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
    },
    viewheader: {
        height: Responsive.hp(12),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 1.5,
        borderBottomColor: COLOR.GRAY,
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 8,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        top: Responsive.hp(6),
        paddingHorizontal: Responsive.wp(5),
    },
    textHeader: {
        fontSize: Responsive.RFPercentage(2.3),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        fontWeight: 'bold',
        textAlign: 'center',
        width: Responsive.wp(80),
        letterSpacing: 0.25
    },
    containerBody: {

    },
});

export { StyleChatWithAdmin }