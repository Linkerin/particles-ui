import { Html, Head, Main, NextScript } from 'next/document';

import PuiTheme from '../src/theme/PuiTheme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <PuiTheme />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
