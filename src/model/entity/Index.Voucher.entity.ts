import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";

export interface VoucherEntity {
    _id: string;
    userUsed: string[];
    usersApplicable: string[];
    name: string;
    images: ImageSourcePropType;
    code: string;
    discount: number;
    description: string;
    condition: string;
    maxDiscountAmount: number;
    minOrderAmount: number;
    usageLimit: number;
    paymentMethod: string;
    status: string;
    expirationDate: string;
    createdAt: string;
}

export interface UseVoucherEntity {
    id: string;
    userId: string;
    paymentMethod: string;
}

export const enum paymentMethod {
    credit_card = 'credit_card',
    paypal = 'paypal',
    cash_on_delivery = 'cash_on_delivery',
    all = 'all',
}

type VoucherState = {
    idVoucher: {
        id: string;
    }
}

export type TypeVoucherProps = NativeStackScreenProps<VoucherState, 'idVoucher'>;


