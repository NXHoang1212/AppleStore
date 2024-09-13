interface EvaluateEntity {
    _id: string;
    order_id: string;
    user_id: string;
    rating: number;
    comment: string;
    detail: object;
    media: Array<string>;
    status: string;
    createdAt: string;
}

interface CreateEvaluateEntity {
    order_id: string;
    user_id: string;
}

interface UpdateEvaluateEntity {
    rating: number;
    comment: string;
    detail: object;
    media: Array<string>;
    status: string;
}

export type { EvaluateEntity, CreateEvaluateEntity, UpdateEvaluateEntity };
