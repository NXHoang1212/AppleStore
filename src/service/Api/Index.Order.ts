import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosIntance";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from "../../constant/Host";
import { OrderEntity } from "../../model/entity/IndexOrder.Entity";


const OrderQuery = createApi({
    reducerPath: 'OrderQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Order'],
    endpoints: build => ({
        GetOrderUser: build.query<{ data: OrderEntity[] }, string>({
            query: id => `/api/order/get_orders_by_user/${id}`,
            providesTags: [{ type: 'Order', id: 'LIST' }],
        }),
        GetDetailOrder: build.query<{ data: OrderEntity }, string>({
            query: id => `/api/order/get_orders_by_id/${id}`,
            providesTags: [{ type: 'Order', id: 'LIST' }],
        }),
    }),
});

export default OrderQuery
export const { useGetOrderUserQuery, useGetDetailOrderQuery } = OrderQuery;



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