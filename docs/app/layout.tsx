import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import { PuiTheme, ThemeProvider } from '../../src';
import Spectrum from '../../src/theme/spectrum/spectrum';

import '../../src/styles/pui-base.scss';
import styles from './layout.module.css';

const manrope = Manrope({ subsets: ['latin'] });

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
      <body className={manrope.className}>
        <PuiTheme mainColors={{ light: { secondary, tertiary } }} />
        <ThemeProvider>
          <div className={styles.container}>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
