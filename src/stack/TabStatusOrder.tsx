import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TabOrderStatusEnum } from '../model/enum/IndexTab.enum';
import { TabOrderStatusListParams, TabOrderStatusType } from '../model/param/IndexTab.Param';
import { StackHomeTypeParam } from '../model/param/IndexStack.Param';

import { COLOR } from '../constant/Colors';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Responsive } from '../constant/Responsive';

import { FontsROBOTO } from '../constant/Fonts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useStatusBarConfig from '../utils/UseStatusBarConfig';
import { Icon } from '../constant/Icon';

import PendingConfirmation from '../screens/other/orderstatus/pending/PendingConfirmation';
import PendingDelivery from '../screens/other/orderstatus/delivery/PendingDelivery';
import StatusCancelled from '../screens/other/orderstatus/delivered/StatusDelivered';
import StatusDelivered from '../screens/other/orderstatus/cancelled/StatusCancelled';

const MaterialTopTabs = createMaterialTopTabNavigator<TabOrderStatusListParams>();

const TabStatusOrderList: TabOrderStatusType[] = [
    {
        component: PendingConfirmation,
        name: TabOrderStatusEnum.PendingConfirmation
    },
    {
        component: PendingDelivery,
        name: TabOrderStatusEnum.PendingDelivery
    },
    {
        component: StatusDelivered,
        name: TabOrderStatusEnum.Delivered
    },
    {
        component: StatusCancelled,
        name: TabOrderStatusEnum.Cancelled
    },
];

const TabStatusOrder = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeTypeParam>>();
    useStatusBarConfig('dark-content', 'transparent', true);
    return (
        <View style={styles.container}>
            <View style={styles.viewheader}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon.BackSVG width={23} height={23} fill={COLOR.REDONE} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Đơn mua hàng</Text>
                    <View style={styles.headerIcon}>
                        <TouchableOpacity onPress={() => navigation.navigate('StackIndividual' as any, { screen: 'SearchOrder' })}>
                            <Icon.SearchSVG width={20} height={20} fill={COLOR.REDONE} style={{ top: 4 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('StackIndividual' as any, { screen: 'ChatWithAdmin' })}>
                            <Icon.ChatSVG width={28} height={28} fill={COLOR.REDONE} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <MaterialTopTabs.Navigator
                screenOptions={{
                    tabBarActiveTintColor: COLOR.ORANGE,
                    tabBarInactiveTintColor: COLOR.BLACK,
                    tabBarStyle: styles.bottomBar,
                    tabBarIndicatorStyle: {
                        backgroundColor: COLOR.REDONE,
                    },
                }}
            >
                {TabStatusOrderList.map((item) => (
                    <MaterialTopTabs.Screen
                        key={item.name}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarLabel: ({ focused }) => (
                                <Text style={{
                                    color: focused ? COLOR.REDONE : COLOR.BLACK,
                                    fontSize: 15,
                                    fontFamily: FontsROBOTO.ROBOTO_REGULAR,
                                    fontWeight: 'bold',
                                    width: Responsive.wp(18),
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                }}>
                                    {item.name}
                                </Text>
                            ),
                        }}
                    />
                ))}
            </MaterialTopTabs.Navigator>
        </View >
    );
};



export default TabStatusOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        height: Responsive.hp(6),
        backgroundColor: COLOR.WHITE,
        marginTop: Responsive.hp(3),
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: Responsive.hp(2.2),
        paddingHorizontal: Responsive.wp(5),
    },
    textHeader: {
        fontSize: 18,
        fontFamily: FontsROBOTO.ROBOTO_REGULAR,
        color: COLOR.REDONE,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 0.25,
        marginLeft: Responsive.wp(10),
    },
    bottomBar: {
        borderTopColor: COLOR.PRIMARY,
        height: Responsive.hp(5),
        width: Responsive.wp(100),
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: Responsive.wp(2),
    },
});
