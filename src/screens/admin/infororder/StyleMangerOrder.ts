import { StyleSheet } from "react-native";
import { COLOR } from "../../../constant/Colors";
import { FontsROBOTO } from "../../../constant/Fonts";
import { Responsive } from "../../../constant/Responsive";

const StyleMangerOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    header: {
        height: Responsive.hp(14.5),
        borderBottomWidth: 1.5,
        borderBottomColor: COLOR.GREY,
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 8,
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: Responsive.hp(1),
        right: Responsive.wp(3),
    },
    headerText: {
        fontSize: Responsive.RFPercentage(2.8),
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        fontWeight: 'bold',
        textAlign: 'center',
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
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM,
        color: COLOR.BLACK,
        letterSpacing: 0.25,
    },  
    textActive: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_BLACK_ITALIC,
        color: COLOR.RED,
        letterSpacing: 0.25,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.RED,
        textAlign: 'center',
    },
    textActiveCancel: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_BLACK_ITALIC,
        color: COLOR.RED,
        letterSpacing: 0.25,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.RED,
        textAlign: 'center',
    },
    
});

export default StyleMangerOrder;