import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

import '../src/styles/pui-base.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />;
    </main>
  );
}
