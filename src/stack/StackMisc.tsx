import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackMiscEnum } from '../model/enum/IndexStack.enum';
import { StackMiscParams } from '../model/param/IndexStack.Param';

import SearchHome from '../screens/homeproduct/search/SearchHome';
import Article from '../screens/homeproduct/product/Article';
import CategoryArticle from '../screens/homeproduct/product/CategoryArticle';
import DetailArticle from '../screens/homeproduct/detail/DetailArticle';
import PaymentOrders from '../screens/order/payment/PaymentOrders';
import VoucherCoupon from '../screens/order/voucher/list/VoucherCoupon';
import DetailVoucherCoupon from '../screens/order/voucher/detail/DetailVoucherCoupon';
import SelectedAddress from '../screens/order/selected/addressorder/SelectedAddress';
import PaymentProvider from '../screens/order/selected/paymentmethod/PaymentProvider';
import DetailOrder from '../screens/other/orderstatus/detail/DetailOrder';


const Stack = createNativeStackNavigator<StackMiscParams>();

const StackMisc = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackMiscEnum.SearchHome} component={SearchHome} />
            <Stack.Screen name={StackMiscEnum.Article} component={Article} />
            <Stack.Screen name={StackMiscEnum.CategoryArticle} component={CategoryArticle} />
            <Stack.Screen name={StackMiscEnum.DetailArticle} component={DetailArticle} />
            <Stack.Screen name={StackMiscEnum.PaymentOrders} component={PaymentOrders} />
            <Stack.Screen name={StackMiscEnum.SelectedAddress} component={SelectedAddress} />
            <Stack.Screen name={StackMiscEnum.VoucherCoupon} component={VoucherCoupon} />
            <Stack.Screen name={StackMiscEnum.DetailVoucherCoupon} component={DetailVoucherCoupon} />
            <Stack.Screen name={StackMiscEnum.PaymentProvider} component={PaymentProvider} />
            <Stack.Screen name={StackMiscEnum.DetailOrder} component={DetailOrder} />
        </Stack.Navigator>
    );
};



export default StackMisc;