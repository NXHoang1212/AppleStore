import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageSourcePropType } from 'react-native';
import { Responsive } from '../../constant/Responsive';
import { FontsROBOTO } from '../../constant/Fonts';
import { COLOR } from '../../constant/Colors';
import { Icon } from '../../constant/Icon';

type Props = {
    text: string;
    image: ImageSourcePropType;
    navigate?: () => void;
}

const renderInformationItem = ({ text, image, navigate }: Props) => (
    <TouchableOpacity style={StyleItemIndividual.viewinfor1} key={text} onPress={navigate}>
        <View style={StyleItemIndividual.viewText}>
            <Image source={image} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
            <Text style={StyleItemIndividual.textinfor1}>{text}</Text>
        </View>
        <Image source={Icon.RIGHT} style={{ width: 25, height: 25, marginLeft: 'auto', }} />
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
    },
    viewText: {
        flexDirection: 'row',
        gap: Responsive.wp(4),
        alignItems: 'center',
    },
    textinfor1: {
        fontSize: 17,
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
        fontSize: 14,
        fontFamily: FontsROBOTO.ROBOTO_ITALIC,
        letterSpacing: 0.5,
        textAlignVertical: 'center',
        color: COLOR.BLACK,
    },
});

export { renderInformationItem, renderOrderStatus }