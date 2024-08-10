import React, { useEffect, useState } from 'react';
import { Text, View, Linking } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { StackHomeEnum } from '../model/enum/IndexStack.enum';
import { StackHomeTypeParam } from '../model/param/IndexStack.Param';
import { navigationRef } from '../utils/RootNavigationRef';

/*User*/
import Slash from '../screens/slash/Slash';
import TabHomePage from './user/TabHomePage';
import StackIndividual from './user/StackIndividual';
import TabStatusOrder from './user/TabStatusOrder';
import StackAuthUser from './user/StackAuthUser';
import StackMisc from './user/StackMisc';
import NotFound from '../screens/notfound/NotFound';

/*Admin*/
import TabAdminManager from './admin/TabAdminManager';
import StacKAdminManagerOrder from './admin/StackAdminManagerOrder';
import StackAdminManagerProduct from './admin/StackAdminManagerProduct';

import ConfigLinking from '../utils/Linking';
import { useAppSelector } from '../import/IndexFeatures';

const Stack = createNativeStackNavigator<StackHomeTypeParam>();

const RootStack = () => {

    const user = useAppSelector(state => state.root.Auth.user);

    useEffect(() => {
        const handleInitialUrl = async () => {
            try {
                const url = await Linking.getInitialURL();
                if (url) {
                    Linking.canOpenURL(url).then(supported => {
                        if (supported) {
                            Linking.openURL(url);
                        } else {
                            console.log("Don't know how to open URI: " + url);
                        }
                    });
                }
            } catch (error) {
                console.log('🚀 ~ handleInitialUrl ~ error:', error);
            }
        };

        handleInitialUrl();

    }, []);

    return (
        <NavigationContainer ref={navigationRef} linking={ConfigLinking}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={StackHomeEnum.slash}>
                <Stack.Screen
                    name={StackHomeEnum.slash}
                    component={Slash}
                />
                {user.role === 'admin' ? (
                    <>
                        <Stack.Screen
                            name={StackHomeEnum.TabAdminManager}
                            component={TabAdminManager}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.StackAdminManagerOrder}
                            component={StacKAdminManagerOrder}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.StackAdminManagerProduct}
                            component={StackAdminManagerProduct}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name={StackHomeEnum.TabHomePage}
                            component={TabHomePage}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.StackIndividual}
                            component={StackIndividual}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.TabStatusOrder}
                            component={TabStatusOrder}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.NotFound}
                            component={NotFound}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.AuthStackUser}
                            component={StackAuthUser}
                        />
                        <Stack.Screen
                            name={StackHomeEnum.StackMisc}
                            component={StackMisc}
                        />
                    </>
                )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
