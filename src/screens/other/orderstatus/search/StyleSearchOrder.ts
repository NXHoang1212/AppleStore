import { StyleSheet } from "react-native";
import { COLOR } from "../../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../../constant/Fonts";
import { Responsive } from "../../../../constant/Responsive";


const StyleSearchOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.GRAY,
        marginTop: Responsive.hp(4),
        paddingHorizontal: Responsive.wp(4),
        height: Responsive.hp(7),
    },
    textheader: {
        color: COLOR.RED,
        fontSize: 16,
        fontFamily: FontsROBOTO.ROBOTO_BOLD,
        letterSpacing: 0.5,
    },
    viewinput: {
        // backgroundColor: COLOR.GRAYONE,
        height: Responsive.hp(6.3),
        marginTop: Responsive.hp(0.8),
    },
    input: {
        borderWidth: 1,
        borderColor: COLOR.GRAY,
        width: Responsive.wp(90),
        height: Responsive.hp(5),
        alignSelf: 'center',
        backgroundColor: COLOR.GRAYONE,
        borderRadius: 5,
    },
    containerBody: {
        flex: 1,
        backgroundColor: COLOR.GRAYONE,
    },
});

export { StyleSearchOrder }