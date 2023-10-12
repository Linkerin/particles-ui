import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import styles from './layout.module.css';

const manrope = Manrope({ subsets: ['latin'] });

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
    <html lang="en" data-pui-mode="system">
      <body className={manrope.className}>
        <div className={styles.container}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
