import joi from 'joi';

interface QueryFilter {
    today: boolean;
}

export const countTodayFilterSchema = joi.object<QueryFilter>({
    today: joi.boolean()
        .default(false)
        .optional()
});