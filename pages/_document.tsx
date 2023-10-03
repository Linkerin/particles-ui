import { Html, Head, Main, NextScript } from 'next/document';

import PuiTheme from '../src/theme/PuiTheme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <PuiTheme />
      </Head>
      <body>
        <style
          dangerouslySetInnerHTML={{
            __html: `\nbody {\n  .nx-py-12 {
              padding-top: 1.75rem;
              padding-bottom: 1.75rem;
            }}`
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
