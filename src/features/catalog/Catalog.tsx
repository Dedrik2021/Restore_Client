import { Grid2, Pagination } from '@mui/material';
import ProductList from './ProductList';
import { useFetchProductsQuery } from './catalogApi';
import Filters from './Filters';
import { useAppSelector } from '../../app/store/store';

const Catalog = () => {
	const productParams = useAppSelector((state) => state.catalog);
	const { data, isLoading } = useFetchProductsQuery(productParams);

	if (isLoading || !data) return <div>Loading...</div>;

	return (
		<Grid2 container spacing={4}>
			<Grid2 size={3}>
				<Filters />
			</Grid2>
			<Grid2 size={9}>
				<ProductList products={data} />
				{/* <Pagination
					color="secondary"
					size="large"
					count={data.pagination.totalPages}
					page={data.pagination.currentPage}
					// onChange={(e, value) => {
					// 	dispatch(setPageNumber(value));
					// }}
				/> */}
			</Grid2>
		</Grid2>
	);
};

export default Catalog;
