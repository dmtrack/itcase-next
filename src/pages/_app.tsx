import '../styles/reset.scss';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { ReduxProvider } from '../store/provider';
import AppLayout from '@/components/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {' '}
            <ReduxProvider>
                <AppLayout title={pageProps.title}>
                    <Component {...pageProps} />
                </AppLayout>
            </ReduxProvider>
        </>
    );
}
