import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../../constant/Host";
import { UseVoucherEntity, VoucherEntity, CreateVoucherEntity, UpdateVoucherEntity } from "../../model/entity/Index.Voucher.entity";

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
        updateVoucher: build.mutation<VoucherEntity, { id: string, voucher: VoucherEntity }>({
            query: ({ id, voucher }) => {
                return {
                    url: `api/voucher/update/${id}`,
                    method: 'PUT',
                    body: voucher
                }
            },
            invalidatesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        resetUsage: build.mutation<VoucherEntity, { id: string, userId: string }>({
            query: ({ id, userId }) => {
                return {
                    url: `api/voucher/reset-usage`,
                    method: 'PUT',
                    body: { id, userId }
                }
            },
            invalidatesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        getAllAdminVoucher: build.query<{ data: VoucherEntity[] }, void>({
            query: () => ({
                url: 'api/voucher/admin/list/get-all',
                method: 'GET'
            }),
            providesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        deleteAdminVoucher: build.mutation<VoucherEntity, string>({
            query: (id) => ({
                url: `api/voucher/admin/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        createAdminVoucher: build.mutation<VoucherEntity, { voucher: CreateVoucherEntity, images: string }>({
            query: ({ voucher, images }) => {
                const formData = new FormData();
                formData.append('name', voucher.name);
                formData.append('code', voucher.code);
                formData.append('discount', voucher.discount.toString());
                formData.append('description', voucher.description);
                formData.append('condition', voucher.condition);
                formData.append('maxDiscountAmount', voucher.maxDiscountAmount.toString());
                formData.append('minOrderAmount', voucher.minOrderAmount.toString());
                formData.append('usageLimit', voucher.usageLimit.toString());
                formData.append('paymentMethod', voucher.paymentMethod);
                formData.append('expirationDate', voucher.expirationDate);
                formData.append('usersApplicable', JSON.stringify(voucher.usersApplicable));
                formData.append('images', images);
                return {
                    url: 'api/voucher/admin/create',
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            }
        }),
        updateAdminVoucher: build.mutation<VoucherEntity, { id: string, voucher: UpdateVoucherEntity, images: string }>({
            query: ({ id, voucher, images }) => {
                const formData = new FormData();
                formData.append('name', voucher.name);
                formData.append('code', voucher.code);
                formData.append('discount', voucher.discount.toString());
                formData.append('description', voucher.description);
                formData.append('condition', voucher.condition);
                formData.append('maxDiscountAmount', voucher.maxDiscountAmount.toString());
                formData.append('minOrderAmount', voucher.minOrderAmount.toString());
                formData.append('usageLimit', voucher.usageLimit.toString());
                formData.append('paymentMethod', voucher.paymentMethod);
                formData.append('expirationDate', voucher.expirationDate);
                formData.append('usersApplicable', JSON.stringify(voucher.usersApplicable));
                formData.append('images', images);
                return {
                    url: `api/voucher/admin/update/${id}`,
                    method: 'PUT',
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            },
            invalidatesTags: [{ type: 'Voucher', id: 'LIST' }],
        }),
        getDetailAdminVoucher: build.query<{ data: VoucherEntity }, string>({
            query: (id) => ({
                url: `api/voucher/admin/detail/${id}`,
                method: 'GET'
            }),
            providesTags: [{ type: 'Voucher', id: 'LIST' }],
        })
    })
})


export const
    {
        useGetVoucherQuery, useGetVoucherByIdQuery, useUseVoucherMutation,
        useUpdateVoucherMutation, useResetUsageMutation, useGetAllAdminVoucherQuery,
        useDeleteAdminVoucherMutation, useCreateAdminVoucherMutation, useUpdateAdminVoucherMutation,
        useGetDetailAdminVoucherQuery
    }
        = VoucherQuery;
export default VoucherQuery