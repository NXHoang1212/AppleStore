import { ImageSourcePropType } from "react-native";
import { TabHomeEnum, TabOrderStatusEnum } from "../enum/IndexTab.enum";

export type TabHomePageListParam = {
    [TabHomeEnum.HomePage]: undefined;
    [TabHomeEnum.Cart]: undefined;
    [TabHomeEnum.category]: undefined;
    [TabHomeEnum.Information]: undefined;
};


export type TabOrderStatusListParams = {
    [TabOrderStatusEnum.PendingConfirmation]: undefined;
    [TabOrderStatusEnum.PendingDelivery]: undefined;
    [TabOrderStatusEnum.Delivered]: undefined;
    [TabOrderStatusEnum.Cancelled]: undefined;
}

export type TabOrderStatusType = {
    component: React.FC;
    name: keyof TabOrderStatusListParams;
};

export type TabHomeType = {
    component: React.FC;
    name: keyof TabHomePageListParam;
    icon: ImageSourcePropType;
    badge?: number;
};