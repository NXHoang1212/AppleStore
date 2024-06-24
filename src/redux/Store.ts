import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import AuthReducer from './slices/Auth.Slice';
import CategoryReducer from './slices/Category.Slice';
import BannerReducer from './slices/Banner.Slice';
import ProductReducer from './slices/Product.Slice';
import ProductPaginationReducer from './slices/ProductLimited.Slice';
import AddressReducer from './slices/Address.Slice';

/*BaseQuery */
import { DetailProducts } from '../service/Api/IndexProduct';
import { AddressQuery } from '../service/Api/IndexAddress';
import { setupListeners } from '@reduxjs/toolkit/query';

const StoreRedux = configureStore({
    reducer: {
        Auth: AuthReducer,
        Category: CategoryReducer,
        Banner: BannerReducer,
        Product: ProductReducer,
        ProductPagination: ProductPaginationReducer,
        Address: AddressReducer,
        [DetailProducts.reducerPath]: DetailProducts.reducer,
        [AddressQuery.reducerPath]: AddressQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        })
            .concat(createImmutableStateInvariantMiddleware())
            .concat(DetailProducts.middleware)
            .concat(AddressQuery.middleware)

});

setupListeners(StoreRedux.dispatch);

export default StoreRedux;