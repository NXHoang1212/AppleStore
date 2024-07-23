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
}
