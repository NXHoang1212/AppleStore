import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../../constant/Host";
import { NotificationEntity, UpdateNotificationEntity } from '../../model/entity/Index.Notification';

const NotificationQuery = createApi({
    reducerPath: 'NotificationQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Notification'],
    endpoints: build => ({
        getNotification: build.query<{ data: NotificationEntity[] }, { userId: string }>({
            query: ({ userId }) => {
                return {
                    url: `api/notifee/get/${userId}`,
                    method: 'GET'
                }
            },
            providesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        createNotification: build.mutation<NotificationEntity, { data: NotificationEntity }>({
            query: ({ data }) => {
                return {
                    url: `api/notifee/create`,
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        updateNotification: build.mutation<NotificationEntity, { data: UpdateNotificationEntity }>({
            query: ({ data }) => {
                return {
                    url: `api/notifee/update`,
                    method: 'PUT',
                    body: data
                }
            },
            invalidatesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        deleteNotification: build.mutation<{ data: NotificationEntity }, { _id: string }>({
            query: ({ _id }) => {
                return {
                    url: `api/notifee/delete/${_id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetNotificationQuery,
    useCreateNotificationMutation,
    useUpdateNotificationMutation,
    useDeleteNotificationMutation
} = NotificationQuery
export default NotificationQuery