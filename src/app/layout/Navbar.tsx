import {
	AppBar,
	Badge,
	Box,
	IconButton,
	LinearProgress,
	List,
	ListItem,
	Toolbar,
	Typography,
} from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/store';
import { setDarkMode } from './uiSlice';

const midLinks = [
	{ title: 'Catalog', path: '/catalog' },
	{ title: 'About', path: '/about' },
	{ title: 'Contact', path: '/contact' },
];

const rightLinks = [
	{ title: 'Login', path: '/login' },
	{ title: 'Register', path: '/register' },
];

const navStyles = {
	color: 'inherit',
	typography: 'h6',
	textDecoration: 'none',
	'&:hover': { color: 'grey.500' },
	'&.active': { color: '#baecf9' },
};

const flexDisplay = {
	display: 'flex',
	alignItems: 'center',
};



const Navbar = () => {
	const { isLoading, darkMode } = useAppSelector((state) => state.ui);
	const dispatch = useAppDispatch();

	return (
		<AppBar position="fixed">
			<Toolbar
				sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
			>
				<Box sx={flexDisplay}>
					<Typography component={NavLink} to="/" variant="h6" sx={navStyles}>
						RE-STORE
					</Typography>
					<IconButton sx={{ marginLeft: '20px' }} onClick={() => dispatch(setDarkMode())}>
						{darkMode ? '🌙' : '☀️'}
					</IconButton>
				</Box>
				<Box>
					<List sx={flexDisplay}>
						{midLinks.map((link) => (
							<ListItem
								key={link.title}
								component={NavLink}
								to={link.path}
								sx={navStyles}
							>
								{link.title.toUpperCase()}
							</ListItem>
						))}
					</List>
				</Box>
				<Box sx={flexDisplay}>
					<IconButton component={NavLink} to="/basket" size="large">
						<Badge badgeContent={4} color="secondary">
							<ShoppingCart sx={{ color: 'inherit' }} />
						</Badge>
					</IconButton>

					<List sx={flexDisplay}>
						{rightLinks.map((link) => (
							<ListItem
								key={link.title}
								component={NavLink}
								to={link.path}
								sx={navStyles}
							>
								{link.title.toUpperCase()}
							</ListItem>
						))}
					</List>
				</Box>
			</Toolbar>
			{isLoading && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress color="secondary" />
				</Box>
			)}
		</AppBar>
	);
};

export default Navbar;
