import { ButtonGroup, Container, Typography, Button } from '@mui/material';
import {
	useLazyGet400ErrorQuery,
	useLazyGet404ErrorQuery,
	useLazyGet401ErrorQuery,
	useLazyGetValidationErrorQuery,
	useLazyGet500ErrorQuery,
} from './errorApi';

const AboutPage = () => {


    const [trigger400Error] = useLazyGet400ErrorQuery();
    const [trigger404Error] = useLazyGet404ErrorQuery();
    const [trigger401Error] = useLazyGet401ErrorQuery();
    const [triggerValidationError] = useLazyGetValidationErrorQuery();
    const [trigger500Error] = useLazyGet500ErrorQuery();

	return (
        <Container maxWidth='lg'>
            <Typography gutterBottom variant='h3'>
                Error for testing
            </Typography>
            <ButtonGroup fullWidth>
                <Button onClick={() => trigger400Error().catch((err) => {
                    console.error(err);
                    
                })} >
                    Test 400 Error
                </Button>
                <Button onClick={() => trigger401Error().catch((err) => {
                    console.error(err);
                    
                })} >
                    Test 401 Error
                </Button>
                <Button onClick={() => trigger404Error().catch((err) => {
                    console.error(err);
                    
                })} >
                    Test 404 Error
                </Button>
                <Button onClick={() => trigger500Error().catch((err) => {
                    console.error(err);
                    
                })} >
                    Test 500 Error
                </Button>
                <Button onClick={() => triggerValidationError().catch((err) => {
                    console.error(err);
                    
                })} >
                    Test Validation Error
                </Button>
            </ButtonGroup>
        </Container>
    )
};

export default AboutPage;
