export interface OrderEntity {
    _id: string;
    user: string;
    cart: any[];
    totalAmount: number;
    status: string;
    paymentMethod: string;
    paymentStatus: string;
    shippingAddress: string;
    shippingFee: number;
    voucher: string;
    paymentCode: string;
    orderCode: string;
    createdAt: string;
    updatedAt: string;
    deliveredAt: Date;
    canceledAt: Date;
}

export interface UpdateOrderEntity {
    _id: string
    status: string;
    canceledAt: Date;

}
export const status = ["Chờ xác nhận", "Đã xác nhận"];
export const paymentStatus = ["Chờ thanh toán", "Đã thanh toán"];


