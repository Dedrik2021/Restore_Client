import { useState } from 'react';
import {
	ButtonGroup,
	Container,
	Typography,
	Button,
	Alert,
	AlertTitle,
	ListItem,
	List,
} from '@mui/material';
import {
	useLazyGet400ErrorQuery,
	useLazyGet404ErrorQuery,
	useLazyGet401ErrorQuery,
	useLazyGetValidationErrorQuery,
	useLazyGet500ErrorQuery,
} from './errorApi';

const AboutPage = () => {
	const [validationErrors, setValidationErrors] = useState<string[]>([]);

	const [trigger400Error] = useLazyGet400ErrorQuery();
	const [trigger404Error] = useLazyGet404ErrorQuery();
	const [trigger401Error] = useLazyGet401ErrorQuery();
	const [triggerValidationError] = useLazyGetValidationErrorQuery();
	const [trigger500Error] = useLazyGet500ErrorQuery();

	const getValidationError = async () => {
		try {
			await triggerValidationError().unwrap();
		} catch (err: unknown) {
			if (
				err &&
				typeof err === 'object' &&
				'message' in err &&
				typeof (err as { message: string }).message === 'string'
			) {
				const errorArray = (err as { message: string }).message.split(', ');
				setValidationErrors(errorArray);
			}
		}
	};

	return (
		<Container maxWidth="lg">
			<Typography gutterBottom variant="h3">
				Error for testing
			</Typography>
			<ButtonGroup fullWidth>
				<Button
					onClick={() =>
						trigger400Error().catch((err) => {
							console.error(err);
						})
					}
				>
					Test 400 Error
				</Button>
				<Button
					onClick={() =>
						trigger401Error().catch((err) => {
							console.error(err);
						})
					}
				>
					Test 401 Error
				</Button>
				<Button
					onClick={() =>
						trigger404Error().catch((err) => {
							console.error(err);
						})
					}
				>
					Test 404 Error
				</Button>
				<Button
					onClick={() =>
						trigger500Error().catch((err) => {
							console.error(err);
						})
					}
				>
					Test 500 Error
				</Button>
				<Button onClick={getValidationError}>Test Validation Error</Button>
			</ButtonGroup>
			{validationErrors.length > 0 && (
				<Alert severity="error">
					<AlertTitle>Validation Error</AlertTitle>
					<List>
						{validationErrors.map((error, index) => (
							<ListItem key={index}>{error}</ListItem>
						))}
					</List>
				</Alert>
			)}
		</Container>
	);
};

export default AboutPage;
