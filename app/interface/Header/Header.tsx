import classNames from 'classnames';

import Logo from '../Logo/Logo';
import ThemeToggler from '../ThemeToggler';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <Logo />
      <ThemeToggler />
    </header>
  );
}

export default Header;
