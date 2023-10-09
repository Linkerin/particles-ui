[![Particles UI Logo](./readme_assets/pui-logo.svg)](https://particles.snipshot.dev/docs)

# Particles UI

> **Note:** Particles UI is currently in an experimental alpha version, and
> there may be critical changes in future releases. We appreciate contributions
> and invite developers to join us in developing and improving this library.

Particles UI is a modern and customizable React components library for building
beautiful web applications.

## Features

- Easy-to-use UI components.
- Customizable styles and theming.
- Accessibility-friendly components.
- Built with performance and scalability in mind.
- Comprehensive documentation and examples.

Particles UI's styling is built using Sass modules. For customization, we
recommend using CSS modules to maintain separation and prevent any unintended
styling conflicts.

## Installation

```bash
npm install @snipshot/particles
```

After installation, follow these steps to start using Particles UI components:

1. Import the styles inside you application entry point. Depending on your
   framework, this could be `main.js` file for [Vite](https://vitejs.dev/),
   `index.js` for [CRA](https://create-react-app.dev/), `_app.js` for
   [Next.js page router](https://nextjs.org/docs/pages/building-your-application/routing/custom-app),
   or root `layout.js` for
   [Next.js app router](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required).

```js
import '@snipshot/particles/style.css';
```

2. Set the `data-pui-mode` attribute on the `<html>` element. It will be the
   default color mode for your application, and it can have one of the following
   values: `system`, `light`, or `dark`.

```html
<!DOCTYPE html>
<html lang="en" data-pui-mode="system">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application powered by Particles UI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

3. Import the `<PuiTheme />` component that contains default theme and allows
   you to customise it with `mainColors` and `theme` props. Depending on your
   framework, you can place it inside the `<head>` element or at the top of the
   `<body>` element. It could be `App.js` file for [Vite](https://vitejs.dev/)
   and [CRA](https://create-react-app.dev/), `_document.js` for
   [Next.js page router](https://nextjs.org/docs/pages/building-your-application/routing/custom-document),
   or root `layout.js` for
   [Next.js app router](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required).

   Below is the example of `_document.js` file of Next.js pages router:

```jsx
import { Html, Head, Main, NextScript } from 'next/document';

import { PuiTheme } from '@snipshot/particles';

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
```

4. Wrap the contents of your application with the `<ThemeProvider>` component,
   which preserves the color mode state and provides useful hooks.

   Here is the example of the root `layout.js` of Next.js app router:

```jsx
import { ThemeProvider } from '@snipshot/particles';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-pui-mode="system">
      <body>
        <PuiTheme />
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

After completing these steps, you can start using the components within your
application:

```jsx
import { Button } from '@snipshot/particles';

function App() {
  return (
    <div>
      <Button color="secondary">Post</Button>
    </div>
  );
}
```

We hope you will use them with joy 😉

## Documentation

**Documentation website is currently under development.** It will be released
soon on [particles.snipshot.dev](https://particles.snipshot.dev/docs).

## Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces.
- [Vite](https://vitejs.dev/) - Frontend Tooling.
- [Next.js](https://nextjs.org/) - The React Framework for the Web.
- [Nextra](https://nextra.site/) - Static site generation framework.
- [Storybook](https://storybook.js.org/) - Frontend workshop for UI development
- [SASS](https://sass-lang.com/) - CSS extension language.
- [Material Design](https://m3.material.io) - Google's open-source design
  system.
- [Fluent 2](https://fluent2.microsoft.design) - Microsoft's design system.
- [Open UI](https://open-ui.org) - The Open UI Community Group.

## Contributions

Contributions are always welcome! If you have ideas for improvements or new
features, please
[open an issue](https://github.com/Linkerin/particles-ui/issues) or submit a
[pull request](https://github.com/Linkerin/particles-ui/pulls) on GitHub.

## Contacts

If you have any questions or need assistance, feel free to contact us at
[particles@snipshot.dev](mailto:particles@snipshot.dev).

## License

Particles UI is licensed under the MIT License. See the
[LICENSE](https://github.com/Linkerin/particles-ui/blob/main/LICENSE) file for
details.

Made with ♥️ by [Linkerin](https://github.com/Linkerin).
