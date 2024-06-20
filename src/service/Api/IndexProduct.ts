import { createAsyncThunk } from "@reduxjs/toolkit";
import { DetailProductParams, ProductState } from '../../model/entity/IndexProduct.entity';
import AxiosInstance from "../../utils/AxiosIntance";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from "../../constant/Host";

export const DetailProducts = createApi({
    reducerPath: 'detailProducts',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['DetailProduct'],
    endpoints: build => ({
        getProductsById: build.query<{ data: DetailProductParams[] }, string>({
            query: id => `/api/product/getdetail/${id}`,
            transformResponse: (response: { data: { products: DetailProductParams } }) => {
                return { data: [response.data.products] };
            },
            providesTags: [{ type: 'DetailProduct', id: 'LIST' }],
        }),
    }),
});

export const { useGetProductsByIdQuery } = DetailProducts;

const fetchProducts = createAsyncThunk<ProductState[], void>(
    'product/fetchProducts',
    async () => {
        try {
            const response = await AxiosInstance().get('/api/product/get-all');
            return response.data.products;
        } catch (error: any) {
            console.log('fetchProducts error:', error);
            throw new Error(error.message);
        }
    }
);

const fetProductsPagination = createAsyncThunk<ProductState[], { page: number, limit: number }>(
    'product/fetchProductsPagination',
    async ({ page, limit }) => {
        try {
            const response = await AxiosInstance().get(`/api/product/get-pagination?page=${page}&limit=${limit}`);
            return response.data.products;
        } catch (error: any) {
            console.log('fetProductsPagination error:', error);
            throw new Error(error.message);
        }
    }
);

export { fetchProducts, fetProductsPagination }

