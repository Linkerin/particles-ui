import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import Header from './interface/Header/Header';
import Nav from './interface/Nav/Nav';
import Spectrum from '@/lib/theme/spectrum/spectrum';
import PuiTheme from '@/lib/theme/PuiTheme';
import ThemeProvider from '@/lib/theme/ThemeContext';

import '../lib/styles/pui-base.css';
import './material-symbols.css';
import styles from './layout.module.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Particles UI Demo',
  description: 'React UI library based compatible with Next.js 13.'
};

const secondary = new Spectrum('hsl', '175, 28%, 54%');
const tertiary = new Spectrum('hsl', '29, 66%, 55%');

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-pui-mode="system">
      <body className={nunito.className}>
        <PuiTheme mainColors={{ light: { secondary, tertiary } }} />
        <ThemeProvider>
          <Header />
          <div className={styles.container}>
            <Nav />
            <main style={{ padding: '1rem 1.5rem' }}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
