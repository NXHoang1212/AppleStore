import { StyleSheet } from "react-native";
import { COLOR } from "../../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../../constant/Fonts";
import { Responsive } from "../../../../constant/Responsive";


const StyleEvaluateProducts = StyleSheet.create({
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
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        top: Responsive.hp(6),
        paddingHorizontal: Responsive.wp(5),
    },
    containerBody: {
        marginTop: Responsive.hp(1),
        backgroundColor: COLOR.GRAYONE,
        flexDirection: 'column',
        gap: Responsive.hp(1),
    },
  
});

export default StyleEvaluateProducts