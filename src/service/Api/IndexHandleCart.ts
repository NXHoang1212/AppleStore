import ToastMessage from "../../utils/ToastMessage";


class IndexHandleCart {
    public static async handleDeleteCart(deleteCart: any, itemId: string, dispatch: any, decrementItemCount: any) {
        try {
            const res = await deleteCart(itemId);
            if (res.data) {
                ToastMessage('success', 'Xóa sản phẩm thành công');
                dispatch(decrementItemCount());
            } else {
                ToastMessage('error', 'Xóa sản phẩm thất bại');
            }
        } catch (error) {
            console.log('handleDeleteCart error:', error);
        }
    }
    public static async handleUpdateCart(updateCart: any, data: any) {
        try {
            const res = await updateCart(data);
            if (res.data) {
                ToastMessage('success', 'Cập nhật giỏ hàng thành công');
            } else {
                ToastMessage('error', 'Cập nhật giỏ hàng thất bại');
            }
        } catch (error) {
            console.log('handleUpdateCart error:', error);
        }
    }

    public static async handleSwipeableOpen(swipeableRef: any, currentlyOpenSwipeable: any) {
        if (currentlyOpenSwipeable.current && currentlyOpenSwipeable.current !== swipeableRef.current) {
            currentlyOpenSwipeable.current.close();
        }
        currentlyOpenSwipeable.current = swipeableRef.current;
    }
}

export default IndexHandleCart;