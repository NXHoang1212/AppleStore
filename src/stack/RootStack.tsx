import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { StackHomeEnum } from '../model/enum/IndexStack.enum';
import { StackHomeTypeParam } from '../model/param/IndexStack.Param';
import { navigationRef } from './RootNavigationRef';

import Slash from '../screens/slash/Slash';

import TabHomePage from './TabHomePage';
import StackIndividual from './StackIndividual';
import TabStatusOrder from './TabStatusOrder';
import StackAuthUser from './StackAuthUser';
import StackMisc from './StackMisc';
import Linking from '../utils/Linking';
import NotFound from '../screens/notfound/NotFound';

const Stack = createNativeStackNavigator<StackHomeTypeParam>();

const RootStack = () => {
    return (
        <NavigationContainer ref={navigationRef} linking={Linking} >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={StackHomeEnum.slash}>
                <Stack.Screen
                    name={StackHomeEnum.slash}
                    component={Slash}
                />
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
