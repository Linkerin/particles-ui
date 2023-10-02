import { Html, Head, Main, NextScript } from 'next/document';

import PuiTheme from '../src/theme/PuiTheme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <PuiTheme
          mainColors={{ light: { secondary: '#69aba5', tertiary: '#d88a41' } }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
