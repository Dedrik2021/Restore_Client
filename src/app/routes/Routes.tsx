import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import Catalog from '../../features/catalog/Catalog';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ProductDetails from '../../features/catalog/ProductDetails';
import App from '../layout/App';
import ServerErrors from '../errors/ServerErrors';
import NotFound from '../errors/NotFound';
import BasketPage from '../../features/basket/BasketPage';
import CheckoutPage from '../../features/checkout/CheckoutPage';

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
				{ path: '/basket', element: <BasketPage /> },
				{ path: '/server-error', element: <ServerErrors /> },
				{ path: '/checkout', element: <CheckoutPage /> },
				{ path: '/not-found', element: <NotFound /> },
				{ path: '*', element: <Navigate replace to="/not-found" /> },
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
