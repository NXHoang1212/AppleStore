import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from "../../constant/Host";
import { CreateEvaluateEntity, UpdateEvaluateEntity, EvaluateEntity } from "../../model/entity/Index.Evaluate.entity";

export const EvaluateQuery = createApi({
    reducerPath: 'EvaluateQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Evaluate'],
    endpoints: build => ({
        createEvaluate: build.mutation<EvaluateEntity, CreateEvaluateEntity>({
            query: (body) => ({
                url: `/api/evaluate/create`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Evaluate', id: 'LIST' }],
        }),
        getEvaluate: build.query<{ data: EvaluateEntity[] }, string>({
            query: (order_id) => ({
                url: `/api/evaluate/get/${order_id}`,
                method: 'GET',
            }),
            providesTags: [{ type: 'Evaluate', id: 'LIST' }],
        }),
        updateEvaluate: build.mutation<UpdateEvaluateEntity, { id: string, body: UpdateEvaluateEntity }>({
            query: ({ id, body }) => ({
                url: `/api/evaluate/update/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: 'Evaluate', id: 'LIST' }],
        }),
    }),
});

export const { useCreateEvaluateMutation, useGetEvaluateQuery, useUpdateEvaluateMutation } = EvaluateQuery;
export default EvaluateQuery;

