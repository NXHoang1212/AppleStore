import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageSourcePropType } from 'react-native';
import { Responsive } from '../../constant/Responsive';
import { FontsROBOTO } from '../../constant/Fonts';
import { COLOR } from '../../constant/Colors';
import { Icon } from '../../constant/Icon';

type Props = {
    text: string;
    image: ImageSourcePropType;
    onPress?: () => void;
}

const renderInformationItem = ({ text, image, onPress }: Props) => (
    <TouchableOpacity style={StyleItemIndividual.viewinfor1} key={text} onPress={onPress}>
        <View style={StyleItemIndividual.viewText}>
            <Image source={image} style={{ width: Responsive.wp(8), height: Responsive.hp(4), resizeMode: 'contain' }} />
            <Text style={StyleItemIndividual.textinfor1}>{text}</Text>
        </View>
        <Image source={Icon.RIGHT} style={{ width: Responsive.wp(6), height: Responsive.hp(2), marginLeft: 'auto' }} />
    </TouchableOpacity>
);

type PropsOrderStatus = {
    icon: React.ReactNode;
    text: string;
    navigate?: () => void;
    image?: ImageSourcePropType;
}

const renderOrderStatus = ({ icon, text, navigate, image }: PropsOrderStatus) => (
    <TouchableOpacity style={StyleItemIndividual.viewconfirm3} key={text} onPress={navigate}>
        {icon}
        <Text style={StyleItemIndividual.textconfirm}>{text}</Text>
    </TouchableOpacity>
);

const StyleItemIndividual = StyleSheet.create({
    viewinfor1: {
        flexDirection: 'row',
        marginHorizontal: Responsive.wp(4),
        marginVertical: Responsive.hp(1),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewText: {
        flexDirection: 'row',
        gap: Responsive.wp(4),
        alignItems: 'center',
    },
    textinfor1: {
        fontSize: Responsive.RFPercentage(2.2),
        fontFamily: FontsROBOTO.ROBOTO_BOLD,
        letterSpacing: 0.5,
        textAlignVertical: 'center',
        color: COLOR.BLACK,
    },
    viewconfirm3: {
        flexDirection: 'column',
        gap: Responsive.wp(2),
        alignItems: 'center',
    },
    textconfirm: {
        fontSize: Responsive.RFPercentage(1.9),
        fontFamily: FontsROBOTO.ROBOTO_MEDIUM_ITALIC,
        letterSpacing: 0.5,
        textAlignVertical: 'center',
        color: COLOR.BLACK,
    },
});

export { renderInformationItem, renderOrderStatus }