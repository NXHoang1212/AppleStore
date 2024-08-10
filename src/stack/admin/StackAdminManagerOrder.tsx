import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackAdminManagerOrderEnum } from '../../model/enum/IndexStack.enum';
import { StackAdminManagerOrderParams } from '../../model/param/IndexStack.Param';

import DetailManagerOrder from '../../screens/admin/infororder/detail/DetailManagerOrder';
import DetailOrderCancel from '../../screens/admin/infororder/detail/DetailOrderCancel';

const Stack = createNativeStackNavigator<StackAdminManagerOrderParams>();

const StacKAdminManagerOrder = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackAdminManagerOrderEnum.DetailManagerOrder} component={DetailManagerOrder} />
            <Stack.Screen name={StackAdminManagerOrderEnum.DetailOrderCancel} component={DetailOrderCancel} />
        </Stack.Navigator>
    );
};



export default StacKAdminManagerOrder;