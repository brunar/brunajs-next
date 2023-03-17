import type { AppProps } from 'next/app'
import AppProvider from '@/components/base/app-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
