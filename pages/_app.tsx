import type { AppProps } from 'next/app';

import '../lib/styles/pui-base.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
