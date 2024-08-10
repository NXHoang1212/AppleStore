import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackAdminManagerProductEnum } from '../../model/enum/IndexStack.enum';
import { StackAdminManagerProductParams } from '../../model/param/IndexStack.Param';

import ListProducts from '../../screens/admin/manager/products/list/ListProducts';
import AddProducts from '../../screens/admin/manager/products/add/AddProducts';
import EditProducts from '../../screens/admin/manager/products/edit/EditProducts';


const Stack = createNativeStackNavigator<StackAdminManagerProductParams>();

const StackAdminManagerProduct = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackAdminManagerProductEnum.ListProducts} component={ListProducts} />
            <Stack.Screen name={StackAdminManagerProductEnum.AddProducts} component={AddProducts} />
            <Stack.Screen name={StackAdminManagerProductEnum.EditProducts} component={EditProducts} />
        </Stack.Navigator>
    );
};



export default StackAdminManagerProduct;