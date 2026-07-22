import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { createRouter, RouterProvider } from '@tanstack/solid-router';
import { render } from 'solid-js/web';
import { getRouter } from '#/router.tsx';
// import './styles.css';
import { getQueryClient } from '@repo/ui-solid/tanstack-query/provider';
import { ThemeProvider } from '@repo/ui-solid/theme';

// Create a new router instance
const router = getRouter();

const rootElement = document.getElementById('root')!;

if (!rootElement?.innerHTML) {
	render(
		() => (
      <QueryClientProvider client={getQueryClient()}>
        <ThemeProvider>

				<RouterProvider router={router} />
			</ThemeProvider>
			</QueryClientProvider>
		),
		rootElement,
	);
}
