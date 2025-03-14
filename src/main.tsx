import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { router } from './app/routes/Routes';
import { store } from './app/store/store';

import './app/layout/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ToastContainer position="bottom-right" hideProgressBar theme="colored" />
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
