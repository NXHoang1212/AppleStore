import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackAuthUserEnum } from '../model/enum/IndexStack.enum';
import { StackAuthUserParams } from '../model/param/IndexStack.Param';

import AuthLoginUser from '../screens/auth/login/AuthLoginUser';
import AuthRegisterUser from '../screens/auth/register/AuthRegisterUser';

const Stack = createNativeStackNavigator<StackAuthUserParams>();

const StackAuthUser = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackAuthUserEnum.AuthLogin} component={AuthLoginUser} />
            <Stack.Screen name={StackAuthUserEnum.AuthRegister} component={AuthRegisterUser} />
        </Stack.Navigator>
    );
};



export default StackAuthUser;