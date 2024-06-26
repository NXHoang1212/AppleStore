import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackHomeTypeParam = {
    TabHome: undefined;
    StackIndividual: undefined;
    AuthUser: undefined;
    Slashwellcome: undefined;
    TabStatusOrder: undefined;
    StackMisc: undefined;
    NotFound: undefined;
};

export type StackIndividualParams = {
    Customer: undefined;
    EditProfile: undefined;
    ViewAddRess: undefined;
    EditAddress: undefined;
    MoreAddress: undefined;
    ChooseAddress: undefined;
    ChangePassword: undefined;
    Favorites: undefined;
    ReviewInfor: undefined;
    ChatWithAdmin: undefined;
    DeleteAccount: undefined;
    ContactFeedback: undefined;
    Introduction: undefined;
    SearchOrder: undefined;
};

export type StackMiscParams = {
    SearchHome: undefined;
    Article: undefined;
    CategoryArticle: undefined;
    DetailArticle: undefined;
}

export type StackAuthUserParams = {
    AuthLogin: undefined;
    AuthRegister: undefined;
    ForgotPassword: undefined;
    OtpPassword: undefined;
};