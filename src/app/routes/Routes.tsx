import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import Catalog from '../../features/catalog/Catalog';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ProductDetails from '../../features/catalog/ProductDetails';
import App from '../layout/App';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/catalog', element: <Catalog /> },
				{ path: '/catalog/:id', element: <ProductDetails /> },
				{ path: '/about', element: <AboutPage /> },
				{ path: '/contact', element: <ContactPage /> },
			],
		},
	],
	{
		future: { 
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
	},
);
