import { StyleSheet } from "react-native";
import { COLOR } from "../../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../../constant/Fonts";
import { Responsive } from "../../../../constant/Responsive";


const StyleViewAddRess = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAY
    },
    viewheader: {
        height: Responsive.hp(10),
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
        top: Responsive.hp(5),
        paddingHorizontal: Responsive.wp(5),
    },
    textHeader: {
        fontSize: 18,
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        fontWeight: 'bold',
        textAlign: 'center',
        width: Responsive.wp(80),
        letterSpacing: 0.25
    },
    containerBody: {

    },
    moreAddress: {
        flexDirection: 'row',
        gap: Responsive.wp(2),
        width: Responsive.wp(100),
        height: Responsive.hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderRadius: Responsive.wp(2),
        marginTop: Responsive.hp(2),
    },
    textMoreAddress: {
        fontSize: 16,
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        letterSpacing: 0.25
    }
});

export { StyleViewAddRess }