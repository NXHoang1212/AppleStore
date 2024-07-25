import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosIntance";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from "../../constant/Host";
import { OrderEntity, UpdateOrderEntity } from "../../model/entity/IndexOrder.Entity";


const OrderQuery = createApi({
    reducerPath: 'OrderQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Order'],
    endpoints: build => ({
        GetOrderUser: build.query<{ data: OrderEntity[] }, string>({
            query: id => `/api/order/get_orders_by_user/${id}`,
            providesTags: [{ type: 'Order', id: 'LIST' }],
        }),
        GetStatusOrder: build.query<{ data: OrderEntity[] }, { id: string, status: string[], paymentStatus: string[] }>({
            query: ({ id, status, paymentStatus }) => ({
                url: `/api/order/get_orders_user_status/${id}?status=${status.join(',')}&paymentStatus=${paymentStatus.join(',')}`,
            }),
            providesTags: [{ type: 'Order', id: 'LIST' }],
        }),
        GetDetailOrder: build.query<{ data: OrderEntity }, string>({
            query: id => `/api/order/get_orders_by_id/${id}`,
            providesTags: [{ type: 'Order', id: 'LIST' }],
        }),
        updateOrder: build.mutation<OrderEntity, UpdateOrderEntity>({
            query: (data) => ({
                url: `/api/order/update_order/${data._id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: [{ type: 'Order', id: 'LIST' }],
        })
    }),
});

export default OrderQuery
export const { useGetOrderUserQuery, useGetDetailOrderQuery, useUpdateOrderMutation, useGetStatusOrderQuery } = OrderQuery;



const GetPaymentUrl = async (OrderData: any) => {
    try {
        const response = await AxiosInstance().post("/api/order/create_payment_url", OrderData);
        return response
    } catch (error: any) {
        console.log("🚀 ~ GetPaymentUrl ~ error:", error)
        throw new Error(error)
    }
}

export { GetPaymentUrl }