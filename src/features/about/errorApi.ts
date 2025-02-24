import { baseQueryWithErrorHandling } from './../../app/api/baseApi';
import { createApi } from '@reduxjs/toolkit/query/react';

export const errorApi = createApi({
    reducerPath: 'errorApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        get400Error: builder.query<void, void>({
            query: () => ({ url: 'buggy/bad-request' }),
        }),
        get404Error: builder.query<void, void>({
            query: () => ({ url: 'buggy/not-found' }),
        }),
        get401Error: builder.query<void, void>({
            query: () => ({ url: 'buggy/unauthorized' }),
        }),
        getValidationError: builder.query<void, void>({
            query: () => ({ url: 'buggy/validation-error' }),
        }),
        get500Error: builder.query<void, void>({
            query: () => ({ url: 'buggy/server-error' }),
        }),
    }),
});

export const {
    useLazyGet400ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGet401ErrorQuery,
    useLazyGetValidationErrorQuery,
    useLazyGet500ErrorQuery,
} = errorApi;