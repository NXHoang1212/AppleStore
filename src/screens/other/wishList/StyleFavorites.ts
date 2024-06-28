import { StyleSheet } from "react-native";
import { COLOR } from "../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../constant/Fonts";
import { Responsive } from "../../../constant/Responsive";


const StyleFavorites = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
    },
    viewheader: {
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 1.5,
        borderBottomColor: COLOR.GRAY,
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: Responsive.hp(6.3),
        paddingHorizontal: Responsive.wp(5),
    },
    textHeader: {
        fontSize: 18,
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 0.25,
        marginLeft: Responsive.wp(9),
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: Responsive.wp(2),
    },
    containerBody: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    textInput: {
        width: Responsive.wp(83),
        borderRadius: 5,
        height: Responsive.hp(5),
        backgroundColor: COLOR.GRAY,
    },
    viewSearch: {
        flexDirection: 'row',
        gap: Responsive.wp(2),
        width: Responsive.wp(100),
        height: Responsive.hp(10),
        justifyContent: 'center',
        alignItems: 'center',
        top: Responsive.hp(1.5),
    },
    textRemove: {
        fontSize: 18,
        fontFamily: FontsOSANS.OSANS_REGULAR,
        color: COLOR.REDONE,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});

export { StyleFavorites }