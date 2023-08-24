import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import Header from './interface/Header/Header';
import Nav from './interface/Nav/Nav';
import ThemeProvider from './_context/ThemeContext';

import './styles/particles-ui.scss';
import styles from './layout.module.scss';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Particles UI Demo',
  description: 'React UI library based compatible with Next.js 13.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-pui-mode="light">
      <body className={nunito.className}>
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
