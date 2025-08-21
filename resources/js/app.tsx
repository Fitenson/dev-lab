import '../css/app.css';
import "./lib/global";

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { store } from './core/presentation/store';
import { setIsLoading } from './core/presentation/store/loadingSlice';
import { Provider } from 'react-redux';
import { Toaster } from './components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


router.on('start', () => {
    store.dispatch(setIsLoading(true));
});

router.on('finish', () => {
    store.dispatch(setIsLoading(false));
});

const queryClient = new QueryClient();


createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App {...props} />
                    <Toaster/>
                </QueryClientProvider>
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
