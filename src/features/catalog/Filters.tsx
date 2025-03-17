import {
	Box,
	Paper,
} from '@mui/material';
import { useFetchFiltersQuery } from './catalogApi';
import Search from './Search';
import RadioButtonGroup from '../../app/shared/components/RadioButtonGroup';
import { useAppSelector, useAppDispatch } from '../../app/store/store';
import { setOrderBy, setBrands, setTypes } from './catalogSlice';
import CheckButtonsGroup from '../../app/shared/components/CheckButtonsGroup';

export default function Filters() {
	const dispatch = useAppDispatch();
	const { orderBy, brands, types } = useAppSelector((state) => state.catalog);
	const { data, isLoading } = useFetchFiltersQuery();


    const sortOption = [
        { label: 'Alphabetical', value: 'Name' },
        { label: 'Price: Low to High', value: 'price' },
        { label: 'Price: High to Low', value: 'priceDesc' },
    ];

	if (isLoading || !data) {
		return <h3>Loading...</h3>;
	}

	return (
		<Box display={'flex'} flexDirection={'column'} gap={3}>
			<Paper>
				<Search />
			</Paper>
			<Paper sx={{ p: 3 }}>
				<RadioButtonGroup
					selectedValue={orderBy}
					onChange={(e) => dispatch(setOrderBy(e.target.value))}
					options={sortOption}
				/>
			</Paper>
			<Paper sx={{ p: 3 }}>
				<CheckButtonsGroup
					items={data.brands}
					checked={brands ?? []}
					onChange={(items: string[]) => dispatch(setBrands(items))}
				/>
			</Paper>
			<Paper sx={{ p: 3 }}>
				<CheckButtonsGroup
					items={data.types}
					checked={types ?? []}
					onChange={(items: string[]) => dispatch(setTypes(items))}
				/>
			</Paper>
		</Box>
	);
}
