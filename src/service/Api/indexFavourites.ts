import { Animated, Easing } from 'react-native';
import ToastMessage from '../../utils/ToastMessage';
import { addFavourite, fetchFavourites } from '../../redux/slices/Favourties.Slice';


class IndexHandleFavourites {
    static async handleAddToCart(animatedValue: Animated.Value) {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1200,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            animatedValue.setValue(0);
        });
    }

    static async handleAddFavourite(item: any, userId: string, navigation: any, dispatch: any) {
        try {
            if (!userId) {
                navigation.navigate('AuthUser', { screen: 'AuthLogin' });
                return;
            }
            await dispatch(addFavourite({ userId, productId: item._id }));
            ToastMessage('success', 'Đã thêm vào yêu thích');
            dispatch(fetchFavourites(userId));
        } catch (error) {
            console.log('handleAddFavourite error:', error);
        }
    }
}

export default IndexHandleFavourites;