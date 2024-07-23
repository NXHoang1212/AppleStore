import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../../constant/Host";
import { UseVoucherEntity, VoucherEntity } from "../../model/entity/Index.Voucher.entity";

const VoucherQuery = createApi({
    reducerPath: 'VoucherQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Voucher'],
    endpoints: build => ({
        useVoucher: build.mutation<VoucherEntity, UseVoucherEntity>({
            query: (body) => ({
                url: '/api/voucher/use',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        getVoucher: build.query<{ data: VoucherEntity[] }, { userId: string, usersApplicable: string }>({
            query: ({ userId, usersApplicable }) => {
                return {
                    url: `api/voucher/list/${usersApplicable}?userId=${userId}`,
                    method: 'GET'
                }
            },
            providesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        getVoucherById: build.query<{ data: VoucherEntity }, string>({
            query: (id) => {
                return {
                    url: `api/voucher/detail/${id}`,
                    method: 'GET'
                }
            },
            providesTags: ['Voucher'],
        }),
        updateVoucher: build.mutation<VoucherEntity, VoucherEntity>({
            query: (voucher) => {
                return {
                    url: `api/voucher/update/${voucher._id}`,
                    method: 'PUT',
                    body: voucher
                }
            },
            invalidatesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
    }),
});

export const { useGetVoucherQuery, useGetVoucherByIdQuery, useUseVoucherMutation, useUpdateVoucherMutation } = VoucherQuery;
export default VoucherQuery