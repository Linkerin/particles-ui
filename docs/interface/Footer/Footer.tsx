import { Link } from '../../../src/components/Link/Link';
import { Text } from '../../../src/components/Text/Text';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Text size="sm">
        Developed by{' '}
        <Link href="https://github.com/Linkerin" isExternal>
          Linkerin
        </Link>
      </Text>
      <Text size="sm">
        Docs powered by{' '}
        <Link href="https://nextra.site" isExternal>
          Nextra
        </Link>
      </Text>
      <Text size="sm"> Licensed under MIT © {new Date().getFullYear()}</Text>
    </footer>
  );
}

export default Footer;
