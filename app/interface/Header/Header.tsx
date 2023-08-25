import classNames from 'classnames';

import NextLink from 'next/link';
import Logo from '../Logo/Logo';
import ThemeToggler from './ThemeToggler';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <NextLink href="/" aria-label="To home page">
        <Logo />
      </NextLink>
      <ThemeToggler />
    </header>
  );
}

export default Header;
