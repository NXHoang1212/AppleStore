import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabAdminManagerListParam, TabAdminManagerType } from '../../model/param/IndexTab.Param';
import { TabAdminManagerEnum, TabHomeEnum } from '../../model/enum/IndexTab.enum';

import { Icon } from '../../constant/Icon';

import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { COLOR } from '../../constant/Colors';
import { Responsive } from '../../constant/Responsive';

import { SvgProps } from 'react-native-svg';

import ManageOrder from '../../screens/admin/infororder/ManageOrder';
import ManagerProducts from '../../screens/admin/manager/ManagerProducts';
import StatisticAdmin from '../../screens/admin/statistic/StatisticAdmin';
import OtherAdmin from '../../screens/admin/other/OtherAdmin';

const BottomTabHomePage = createBottomTabNavigator<TabAdminManagerListParam>();

const TabAdminManager = () => {

    const tabAdmin: TabAdminManagerType[] = [
        {
            component: ManageOrder,
            name: TabAdminManagerEnum.Order,
            icon: Icon.ShoppingCartSVG as SvgProps,
            isSvg: true
        },
        {
            component: ManagerProducts,
            name: TabAdminManagerEnum.Manager,
            icon: Icon.CART,
            isSvg: false
        },
        {
            component: StatisticAdmin,
            name: TabAdminManagerEnum.Statistic,
            icon: Icon.CATEGORY,
            isSvg: false
        },
        {
            component: OtherAdmin,
            name: TabAdminManagerEnum.Other,
            icon: Icon.INFOR,
            isSvg: false
        },
    ]

    return (
        <BottomTabHomePage.Navigator
            screenOptions=
            {{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: COLOR.ORANGE,
                tabBarInactiveTintColor: COLOR.BLACK,
                tabBarStyle: styles.bottomBar,
            }}
        >
            {tabAdmin.map((item) => (
                <BottomTabHomePage.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {item.isSvg ? (
                                    <item.icon
                                        width={24}
                                        height={24}
                                        fill={focused ? 'orange' : 'red'}
                                    />
                                ) : (
                                    <Image
                                        source={item.icon as ImageSourcePropType}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: focused ? 'orange' : 'red',
                                        }}
                                    />
                                )}
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: focused ? COLOR.ORANGE : COLOR.RED,
                                fontSize: 11.5,
                                fontWeight: 'bold',
                            }}>
                                {item.name}
                            </Text>
                        ),
                    }}
                />
            ))}
        </BottomTabHomePage.Navigator>
    );
};

export default TabAdminManager;


const styles = StyleSheet.create({
    bottomBar: {
        borderTopColor: COLOR.PRIMARY,
        height: Responsive.hp(6),
    },
});

