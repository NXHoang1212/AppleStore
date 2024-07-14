import { Animated, Easing } from 'react-native';
import ToastMessage from '../../utils/ToastMessage';
import { addFavourite, fetchFavourites, removeFavourite } from '../../redux/slices/Favourties.Slice';
import { useCreateCartMutation } from './IndexCart';
import { DetailProductParams } from '../../model/entity/IndexProduct.entity';
import { calculateDiscountedPrice } from '../../utils/FormatPrice';

class IndexHandleDetails {
    static async handleAddToCart(animatedValue: Animated.Value,
        userId: string, selectedPrice: { price: number, color: string }, item: DetailProductParams, createCart: any, discountPrice: number) {
        try {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => {
                animatedValue.setValue(0);
            });
            if (!userId) {
                return ToastMessage('error', 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
            }
            if (!selectedPrice.color) {
                return ToastMessage('error', 'Vui lòng chọn màu sản phẩm');
            }
            const res = await createCart({
                user: userId,
                products: {
                    _id: item._id,
                    name: item.name,
                    model: item.model,
                    storage: item.storage,
                    priceColor: {
                        color: selectedPrice.color,
                        price: discountPrice,
                        image: item.images[0],
                    }
                },
                quantity: 1,
            });
            if (res.data) {
                ToastMessage('success', 'Thêm vào giỏ hàng thành công');
            }
        } catch (error) {
            console.log("🚀 ~ handleAddToCart ~ error:", error);
        }
    };
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

    static async handleRemoveFavourite(favouriteId: string, dispatch: any, userId: string) {
        try {
            await dispatch(removeFavourite(favouriteId));
            ToastMessage('success', 'Đã xóa khỏi yêu thích');
            dispatch(fetchFavourites(userId));
        } catch (error) {
            console.log('handleRemoveFavourite error:', error);
        }
    }

    static async handleSelectPrice(price: number, color: string, setSelectedPrice: React.Dispatch<React.SetStateAction<{ price: number, color: string }>>,
        setDiscountedPrice: React.Dispatch<React.SetStateAction<number>>,
        item: DetailProductParams) {
        try {
            setSelectedPrice({ price, color });
            setDiscountedPrice(calculateDiscountedPrice(price, item.discount.percentage));
        } catch (error) {
            console.log('handleSelectPrice error:', error);
        }
    };
}

export default IndexHandleDetails;