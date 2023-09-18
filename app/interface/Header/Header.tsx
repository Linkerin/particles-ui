import NextLink from 'next/link';
import classNames from 'classnames';

import GithubIconLink from './GitHubIconLink';
import Logo from '../Logo/Logo';
import ThemeToggler from './ThemeToggler';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <NextLink href="/" aria-label="To home page">
        <Logo />
      </NextLink>
      <div className={styles['buttons-container']}>
        <GithubIconLink />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
