import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../../constant/Host";
import { NotificationEntity, UpdateNotificationEntity, CreateNotificationEntity } from '../../model/entity/Index.Notification.entity';

const NotificationQuery = createApi({
    reducerPath: 'NotificationQuery',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Notification'],
    endpoints: build => ({
        getNotification: build.query<{ data: NotificationEntity[] }, { userId: string }>({
            query: ({ userId }) => {
                return {
                    url: `/api/notifee/get/${userId}`,
                    method: 'GET'
                }
            },
            providesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        createNotification: build.mutation<NotificationEntity, { data: NotificationEntity }>({
            query: ({ data }) => {
                return {
                    url: `/api/notifee/create`,
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        updateNotification: build.mutation<NotificationEntity, { data: UpdateNotificationEntity }>({
            query: ({ data }) => {
                return {
                    url: `/api/notifee/update`,
                    method: 'PUT',
                    body: data
                }
            },
            invalidatesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        deleteNotification: build.mutation<{ data: NotificationEntity }, { _id: string }>({
            query: ({ _id }) => {
                return {
                    url: `/api/notifee/delete/${_id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        getAdminNotification: build.query<{ data: NotificationEntity[] }, void>({
            query: () => {
                return {
                    url: `/api/notifee/admin/getNotification`,
                    method: 'GET'
                }
            },
            providesTags: [{ type: 'Notification', id: 'LIST' }],
        }),
        createAdminNotification: build.mutation<NotificationEntity, { body: any }>({
            query: ({ body }) => {
                return {
                    url: '/api/notifee/admin/createNotifications',
                    method: 'POST',
                    body: body
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
    useDeleteNotificationMutation,
    useGetAdminNotificationQuery,
    useCreateAdminNotificationMutation
} = NotificationQuery
export default NotificationQuery