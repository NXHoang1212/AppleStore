import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackAdminManagerOtherEnum } from '../../model/enum/IndexStack.enum';
import { StackAdminMangerOtherParams } from '../../model/param/IndexStack.Param';

import EditProfileAdmin from '../../screens/admin/other/profile/EditProfileAdmin';
import ManagerCustomerAdmin from '../../screens/admin/other/customer/ManagerCustomerAdmin';

const Stack = createNativeStackNavigator<StackAdminMangerOtherParams>();

const StackAdminManagerOther = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name={StackAdminManagerOtherEnum.EditProfileAdmin} component={EditProfileAdmin} />
            <Stack.Screen name={StackAdminManagerOtherEnum.ManagerCustomerAdmin} component={ManagerCustomerAdmin} />

        </Stack.Navigator>
    );
};



export default StackAdminManagerOther;