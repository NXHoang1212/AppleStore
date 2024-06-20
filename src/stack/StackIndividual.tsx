import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackIndividualEnum } from '../model/enum/IndexStack.enum';
import { StackIndividualParams } from '../model/param/IndexStack.Param';
import EditProfile from '../screens/other/profile/EditProfile';
import ViewAddress from '../screens/other/address/view/ViewAddress';
import MoreAddress from '../screens/other/address/more/MoreAddress';
import EditAddress from '../screens/other/address/edit/EditAddress';
import ChooseAddress from '../screens/other/address/maps/ChooseAddress';
import Favorites from '../screens/other/wishList/Favorites';
import ChangePassword from '../screens/other/password/ChangePassword';
import ChatWithAdmin from '../screens/other/chat/ChatWithAdmin';
import ReviewInfor from '../screens/other/review/ReviewInfor';
import DeleteAccount from '../screens/other/account/DeleteAccount';
import ContactFeedback from '../screens/other/feedback/ContactFeedback';
import Introduction from '../screens/other/introduction/Introduction';
import SearchOrder from '../screens/other/orderstatus/search/SearchOrder';



const Stack = createNativeStackNavigator<StackIndividualParams>();

const StackIndividual = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackIndividualEnum.EditProfile} component={EditProfile} />
            <Stack.Screen name={StackIndividualEnum.ViewAddRess} component={ViewAddress} />
            <Stack.Screen name={StackIndividualEnum.MoreAddress} component={MoreAddress} />
            <Stack.Screen name={StackIndividualEnum.EditAddress} component={EditAddress} />
            <Stack.Screen name={StackIndividualEnum.ChooseAddress} component={ChooseAddress} />
            <Stack.Screen name={StackIndividualEnum.Favorites} component={Favorites} />
            <Stack.Screen name={StackIndividualEnum.ChangePassword} component={ChangePassword} />
            <Stack.Screen name={StackIndividualEnum.ChatWithAdmin} component={ChatWithAdmin} />
            <Stack.Screen name={StackIndividualEnum.ReviewInfor} component={ReviewInfor} />
            <Stack.Screen name={StackIndividualEnum.DeleteAccount} component={DeleteAccount} />
            <Stack.Screen name={StackIndividualEnum.ContactFeedback} component={ContactFeedback} />
            <Stack.Screen name={StackIndividualEnum.Introduction} component={Introduction} />
            <Stack.Screen name={StackIndividualEnum.SearchOrder} component={SearchOrder} />
            {/* <Stack.Screen name={StackIndividualEnum.Customer} component={Customer} /> */}
        </Stack.Navigator>
    );
};



export default StackIndividual;