import { baseQueryWithErrorHandling } from './../../app/api/baseApi';
import {createApi} from '@reduxjs/toolkit/query/react';
import { Product } from '../../models/product';

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => 'products'
        }),

        fetchProductDetails: builder.query<Product, string>({
            query: (productId) => `products/${productId}`
        }),
    }),
})

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;