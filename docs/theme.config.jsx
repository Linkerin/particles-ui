import { useRouter } from 'next/router';
import Logo from './app/interface/Logo/Logo';
import Footer from './docs/interface/Footer/Footer';

const nextraThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/Linkerin/particles-ui'
  },
  docsRepositoryBase: 'https://github.com/Linkerin/particles-ui',
  footer: {
    text: <Footer />
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
