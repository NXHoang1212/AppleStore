
/*Redux Toolkit */
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';

/*Slice */
import AuthReducer from './slices/Auth.Slice';
import CategoryReducer from './slices/Category.Slice';
import BannerReducer from './slices/Banner.Slice';
import ProductReducer from './slices/Product.Slice';
import ProductPaginationReducer from './slices/ProductLimited.Slice';
import AddressReducer from './slices/Address.Slice';
import FavourtiesReducer from './slices/Favourties.Slice';
import CountCartReducer from './slices/CountCartSlice'

/*BaseQuery */
import { DetailProducts } from '../service/Api/IndexProduct';
import { AddressQuery } from '../service/Api/IndexAddress';
import { CartQuery } from '../service/Api/IndexCart';
import VoucherQuery from '../service/Api/Index.Voucher';
import OrderQuery from '../service/Api/Index.Order';
import { setupListeners } from '@reduxjs/toolkit/query';

/*AsyncStorage, Redux Persist */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    Auth: AuthReducer,
    CountCart: CountCartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const StoreRedux = configureStore({
    reducer: {
        root: persistedReducer,
        Category: CategoryReducer,
        Banner: BannerReducer,
        Product: ProductReducer,
        ProductPagination: ProductPaginationReducer,
        Address: AddressReducer,
        Favourites: FavourtiesReducer,
        [DetailProducts.reducerPath]: DetailProducts.reducer,
        [AddressQuery.reducerPath]: AddressQuery.reducer,
        [CartQuery.reducerPath]: CartQuery.reducer,
        [VoucherQuery.reducerPath]: VoucherQuery.reducer,
        [OrderQuery.reducerPath]: OrderQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: {
                ignoredPaths: ['root.Auth.user', 'root.Auth.isLogin', 'root.Auth.loading',
                    'root.Auth.error', 'root.CountCart', 'root.Category', 'root.Banner',
                    'root.Product', 'root.ProductPagination', 'root.Address', 'root.Favourites',
                    'root.DetailProducts', 'root.AddressQuery', 'root.CartQuery', 'root.VoucherQuery',
                    'root.OrderQuery']
            },
            serializableCheck: false,
        })
            .concat(createImmutableStateInvariantMiddleware())
            .concat(DetailProducts.middleware)
            .concat(AddressQuery.middleware)
            .concat(VoucherQuery.middleware)
            .concat(CartQuery.middleware)
            .concat(OrderQuery.middleware)

});

setupListeners(StoreRedux.dispatch);

export default StoreRedux;
export const persistor = persistStore(StoreRedux);