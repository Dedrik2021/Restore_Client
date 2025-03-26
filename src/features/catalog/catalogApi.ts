import { baseQueryWithErrorHandling } from './../../app/api/baseApi';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Product } from '../../models/product';
import { ProductParams } from '../../models/productParams';
import { prodParams } from '../../lib/util';

export const catalogApi = createApi({
	reducerPath: 'catalogApi',
	baseQuery: baseQueryWithErrorHandling,
	endpoints: (builder) => ({
		fetchProducts: builder.query<Product[], ProductParams>({
			query: (productParams) => {

				return {
					url: 'products',
					params: prodParams(productParams),
				};
			},
		}),

		fetchProductDetails: builder.query<Product, string>({
			query: (productId) => `products/${productId}`,
		}),

		fetchFilters: builder.query<{ brands: string[]; types: string[] }, void>({
			query: () => 'products/filters',
		}),
	}),
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery, useFetchFiltersQuery } =
	catalogApi;
