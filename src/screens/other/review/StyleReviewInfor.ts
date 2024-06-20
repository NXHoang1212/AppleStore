import { StyleSheet } from "react-native";
import { COLOR } from "../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../constant/Fonts";
import { Responsive } from "../../../constant/Responsive";


const StyleReviewInfor = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAY,
    },
    viewheader: {
        height: Responsive.hp(10),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.GRAY,
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        top: Responsive.hp(4.5),
        paddingHorizontal: Responsive.wp(3),
    },
    textHeader: {
        fontSize: 18,
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.BLACK,
        fontWeight: 'bold',
        textAlign: 'center',
        left: Responsive.wp(14),
        letterSpacing: 0.25,
        marginLeft: Responsive.wp(9),
    },
    containerBody: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewTab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Responsive.hp(1.5),
        marginBottom: Responsive.hp(2),
    },
    textTab: {
        fontSize: 15,
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.GREY,
        letterSpacing: 0.25,
    },  
    textActive: {
        fontSize: 15,
        fontFamily: FontsROBOTO.ROBOTO_BLACK_ITALIC,
        color: COLOR.RED,
        letterSpacing: 0.25,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.RED,
        width: Responsive.wp(30),
        textAlign: 'center',
    },
});

export { StyleReviewInfor }