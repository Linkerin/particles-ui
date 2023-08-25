[![Particles UI Logo](./public/pui-logo.svg)](https://particles-ui.snipshot.dev)

# Particles UI

React components based on [Material Design 3](https://m3.material.io).
Components are fully compatible with [Next.js 13 server component](https://nextjs.org/docs/getting-started/react-essentials#server-components). Uses [Sass](https://sass-lang.com) for styling.

## Top priotity components for implementation

- [x] [Buttons](https://m3.material.io/components/buttons/overview)
- [x] [Floating action buttons](https://m3.material.io/components/floating-action-button/overview)
- [x] [Icon buttons](https://m3.material.io/components/icon-buttons/overview)
- [x] [Cards](https://m3.material.io/components/cards/overview)
- [x] [Chips](https://m3.material.io/components/chips/overview)
- [x] [Lists](https://m3.material.io/components/lists/overview)
- [x] Links
- [ ] [Menus](https://m3.material.io/components/menus/guidelines)
- [x] [Switch](https://m3.material.io/components/switch/overview)
- [ ] [Snackbar](https://m3.material.io/components/snackbar/overview)
- [x] [Divider](https://m3.material.io/components/divider/overview)
- [x] [Typography](https://m3.material.io/styles/typography/overview)

## Demo

```bash
git clone https://github.com/Linkerin/particles-ui.git

npm i

npm run dev
```

Recommended icons library: [tabler icons](https://tabler-icons.io/)

## To-Do

- **Important**: no prefetch for `Nav` (proper link typing);
- **Link**: proper typing for `as` value.
- **Buttons**: types for `as` prop, different colors for `soft` variant? consider using react `lazy()`;
- **Card**: think about pseudo divider colors;
- **IconButtons**: develop `ToggleIconButton` component;
- **Chip**: develop `ToggleChip` component;
- **Switch**: think about `outlined` version;
