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
                },
                Notification: {
                    path: 'Notification',
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

const ConfigLinking: any = {
    prefixes: [HOST.DOMAIN],
    config,
};

export default ConfigLinking;
