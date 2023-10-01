import { useRouter } from 'next/router';
import Logo from './app/interface/Logo/Logo';

const nextraThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/Linkerin/particles-ui'
  },
  docsRepositoryBase: 'https://github.com/Linkerin/particles-ui',
  footer: {
    text: (
      <span>
        Developed by{' '}
        <a
          href="https://github.com/Linkerin"
          target="_blank"
          rel="noopener external"
        >
          Linkerin
        </a>{' '}
        | Docs powered by{' '}
        <a href="https://nextra.site" target="_blank" rel="noopener external">
          Nextra
        </a>{' '}
        | Licensed under MIT © {new Date().getFullYear()} Particles UI.
      </span>
    )
  },
  primaryHue: 233,
  primarySaturation: 40,
  sidebar: { defaultMenuCollapseLevel: 3 },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (/\/?docs\/?.*/.test(asPath)) {
      return {
        titleTemplate: '%s · Particles UI'
      };
    }
  }
};

export default nextraThemeConfig;
