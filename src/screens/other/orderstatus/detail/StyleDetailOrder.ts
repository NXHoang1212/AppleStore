import { StyleSheet } from "react-native";
import { COLOR } from "../../../../constant/Colors";
import { FontsOSANS, FontsROBOTO } from "../../../../constant/Fonts";
import { Responsive } from "../../../../constant/Responsive";


const StyleDetailOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewheader: {
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 1.8,
        borderBottomColor: COLOR.GRAYONE,
        height: Responsive.hp(12),
        justifyContent: 'center',
        paddingHorizontal: Responsive.wp(3),
        marginTop: Responsive.hp(1),
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: Responsive.hp(1.5),
    },
    containerBody: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },

});

export { StyleDetailOrder }