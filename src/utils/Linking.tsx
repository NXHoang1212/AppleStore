import { HOST } from "../constant/Host";

const config = {
    screens: {
        NotFound: '*',
        StackMisc: {
            path: 'StackMisc',
            screens: {
                DetailArticle: {
                    path: 'getdetail/:_id'
                },
                OrderSuccess: {
                    path: 'order/success',
                },
                OrderFailed: {
                    path: 'order/failed',
                }
            },
        },
        TabHomePage: {
            path: 'TabHome',
            screens: {
                HomePage: { path: 'Trang chủ' },
            },
        },
    },
};

const Linking: any = {
    prefixes: [HOST.DOMAIN],
    config,
};

export default Linking;
