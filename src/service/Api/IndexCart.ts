import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../../constant/Host";
import { CartEntity, CreateCartEntity, ResponseCartEntity, UpdateCartEntity } from "../../model/entity/IndexCart.entity";


const CartQuery = createApi({
    reducerPath: 'cartQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Cart'],
    endpoints: build => ({
        getCartId: build.query<{ data: CartEntity[] }, string>({
            query: (id) => `/api/cart/getCartId/${id}`,
            providesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
        getCartByUser: build.query<{ data: CartEntity[] }, string>({
            query: (id) => `/api/cart/getCartUserId/${id}`,
            providesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
        createCart: build.mutation<CartEntity, CreateCartEntity>({
            query: (body) => ({
                url: '/api/cart/addCart',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
        updateCart: build.mutation<UpdateCartEntity, CartEntity>({
            query: (body) => ({
                url: `/api/cart/updateCart/${body._id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
        deleteCart: build.mutation<CartEntity, string>({
            query: (id) => ({
                url: `/api/cart/deleteCart/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
    })
});

export const { useGetCartIdQuery, useGetCartByUserQuery, useCreateCartMutation, useUpdateCartMutation, useDeleteCartMutation } = CartQuery;
export { CartQuery };