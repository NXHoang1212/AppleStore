export interface NotificationEntity {
    _id: string;
    title: string;
    body: string;
    userId: string;
    type: string;
    data: any;
    isRead: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateNotificationEntity {
    _id: string;
    isRead: boolean;
}
