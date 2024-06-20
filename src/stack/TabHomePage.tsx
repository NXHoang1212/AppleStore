import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabHomePageListParam, TabHomeType } from '../model/param/IndexTab.Param';
import { TabHomeEnum } from '../model/enum/IndexTab.enum';

import { Icon } from '../constant/Icon';

import { Image, StyleSheet, Text } from 'react-native';
import { COLOR } from '../constant/Colors';
import { Responsive } from '../constant/Responsive';

import HomePage from '../screens/homeproduct/home/HomePage';
import Cart from '../screens/cart/Cart';
import CategoryProduct from '../screens/category/CategoryProduct';
import Information from '../screens/other/infor/Information';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { fetchBannerProduct } from '../service/Api/IndexBanner';
import { fetchProducts, fetProductsPagination } from '../service/Api/IndexProduct';
import { fetchCategoryProduct } from '../service/Api/IndexCategory';
import { useAppDispatch } from '../import/IndexFeatures';

const BottomTabHomePage = createBottomTabNavigator<TabHomePageListParam>();

const TabHomePage = () => {
    const tabHome: TabHomeType[] = [
        {
            component: HomePage,
            name: TabHomeEnum.HomePage,
            icon: Icon.HOME
        },
        {
            component: Cart,
            name: TabHomeEnum.Cart,
            icon: Icon.CART
        },
        {
            component: CategoryProduct,
            name: TabHomeEnum.category,
            icon: Icon.CATEGORY
        },
        {
            component: Information,
            name: TabHomeEnum.Information,
            icon: Icon.INFOR
        },
    ]
    // const dispatch = useAppDispatch()
    // useFocusEffect(
    //     React.useCallback(() => {
    //         const loadData = async () => {
    //             await dispatch(fetchBannerProduct());
    //             await dispatch(fetProductsPagination({ page: 1, limit: 10 }));
    //             await dispatch(fetchProducts());
    //             await dispatch(fetchCategoryProduct());
    //         };

    //         loadData();
    //     }, [dispatch])
    // )

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
            {tabHome.map((item) => (
                <BottomTabHomePage.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={item.icon}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? COLOR.ORANGE : COLOR.RED
                                }}
                            />
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

export default TabHomePage;


const styles = StyleSheet.create({
    bottomBar: {
        borderTopColor: COLOR.PRIMARY,
        height: Responsive.hp(6),
    },
});
